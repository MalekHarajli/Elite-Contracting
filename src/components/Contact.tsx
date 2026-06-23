import { useState, type FormEvent } from 'react'
import { Phone, Mail, Clock, MapPin, Instagram, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { site, serviceOptions, WEB3FORMS_KEY } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'New quote request — Elite Contracting website')
    data.append('from_name', 'Elite Contracting Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please call us instead.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or call us directly.')
    }
  }

  return (
    <section id="contact" className="bg-paper py-28 sm:py-36">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Get a Free Quote"
          subtitle="Tell us about your project. We respond fast — usually the same day."
        />

        <div ref={ref} className="reveal mt-16 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h3 className="heading text-2xl text-ink">Talk to Elite Contracting</h3>
            <p className="mt-3 text-ink/60">
              Prefer to talk it through? Call or message us any time — we’re here 24/7.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href={site.phoneHref} className="transition-colors hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </ContactItem>
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email">
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-accent">
                  {site.email}
                </a>
              </ContactItem>
              <ContactItem icon={<Clock className="h-5 w-5" />} label="Hours">
                {site.hours}
              </ContactItem>
              <ContactItem icon={<MapPin className="h-5 w-5" />} label="Service Area">
                {site.serviceArea}
              </ContactItem>
              <ContactItem icon={<Instagram className="h-5 w-5" />} label="Instagram">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {site.instagramHandle}
                </a>
              </ContactItem>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden="true" />
                <h3 className="heading mt-4 text-2xl text-ink">Thank you!</h3>
                <p className="mt-2 max-w-sm text-ink/60">
                  Your request is in. We’ll be in touch shortly. Need us sooner? Call{' '}
                  <a href={site.phoneHref} className="font-semibold text-accent">
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
                noValidate
              >
                {/* Honeypot — hidden from users, catches bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(313) 000-0000" />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Service" htmlFor="service">
                    <select id="service" name="service" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${inputClass} resize-y`}
                      placeholder="Tell us about your project…"
                    />
                  </Field>
                </div>

                {status === 'error' && (
                  <p className="mt-4 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-5 w-5 flex-none" aria-hidden="true" />
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    'Send Request'
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-ink/40">
                  By submitting you agree to be contacted about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-accent'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-ink/70">{label}</span>
      {children}
    </label>
  )
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-ink/45">{label}</span>
        <span className="text-base text-ink/90">{children}</span>
      </span>
    </li>
  )
}
