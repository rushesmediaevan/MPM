import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FORM_ENDPOINT, FORM_READY } from '../constants/tracking.js'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../constants/site.js'
import '../styles/pages/estimate.css'

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'location', label: 'City / ZIP', type: 'text', required: true, autoComplete: 'postal-code' },
]

function validate(values) {
  const errors = {}
  if (!values.name?.trim()) errors.name = 'Please enter your name.'
  if (!values.phone?.trim() || values.phone.replace(/\D/g, '').length < 7)
    errors.phone = 'Please enter a phone number we can reach you at.'
  if (!values.email?.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = 'Please enter a valid email.'
  if (!values.location?.trim()) errors.location = 'City or ZIP helps us route the visit.'
  if (!values.project?.trim() || values.project.trim().length < 8)
    errors.project = 'A sentence or two on what you’re looking to do.'
  return errors
}

export default function EstimatePage() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    project: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  function onChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setSubmitError(null)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    try {
      if (!FORM_READY) {
        throw new Error(
          'Form endpoint is not configured. Set FORM_ENDPOINT in src/constants/tracking.js.',
        )
      }

      const payload = {
        ...values,
        _subject: `New MPM estimate request — ${values.name}`,
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        page: typeof window !== 'undefined' ? window.location.href : '',
        submitted_at: new Date().toISOString(),
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || `Submission failed (${res.status}).`)
      }

      navigate('/thank-you', { replace: true })
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please call us instead.')
      setSubmitting(false)
    }
  }

  return (
    <div className="estimate-page">
      <div className="estimate-wrap">
        <p className="estimate-eyebrow">Free estimate · South Jersey</p>
        <h1 className="estimate-title">
          Patios, drainage, pressure washing —
          <br />
          <em>booked by a local crew.</em>
        </h1>
        <p className="estimate-lead">
          Tell us what you’re looking to do. We’ll reach out within one business day to set a walk-through
          and a clear quote. No subs, no pressure.
        </p>

        <div className="estimate-trust">
          <span>Cherry Hill · Marlton · Moorestown</span>
          <span>Owner on site</span>
          <span>Free walk-through</span>
        </div>

        <form className="estimate-form" onSubmit={onSubmit} noValidate>
          {FIELDS.map((f) => (
            <div
              key={f.name}
              className={`estimate-field${errors[f.name] ? ' estimate-field--error' : ''}`}
            >
              <label htmlFor={`estimate-${f.name}`}>{f.label}</label>
              <input
                id={`estimate-${f.name}`}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                value={values[f.name]}
                onChange={onChange}
                required={f.required}
              />
              {errors[f.name] ? (
                <span className="estimate-field-error">{errors[f.name]}</span>
              ) : null}
            </div>
          ))}

          <div
            className={`estimate-field${errors.project ? ' estimate-field--error' : ''}`}
          >
            <label htmlFor="estimate-project">What are you looking to do?</label>
            <textarea
              id="estimate-project"
              name="project"
              value={values.project}
              onChange={onChange}
              placeholder="Paver patio, retaining wall, drainage, soft-wash, etc."
              required
            />
            {errors.project ? (
              <span className="estimate-field-error">{errors.project}</span>
            ) : null}
          </div>

          {submitError ? (
            <div className="estimate-form-error" role="alert">
              {submitError} You can also call {PHONE_DISPLAY} or email{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </div>
          ) : null}

          <button type="submit" className="estimate-submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Request estimate'}
          </button>
        </form>

        <p className="estimate-phone">
          Prefer to talk? <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
        </p>
      </div>
    </div>
  )
}
