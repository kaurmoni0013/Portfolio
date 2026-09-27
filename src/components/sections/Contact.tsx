import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Download, Send } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/kaurmoni0013',
    href: socials[0].href,
    icon: <SocialIcon id="github" className="size-5" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kaurmoni0013',
    href: socials[1].href,
    icon: <SocialIcon id="linkedin" className="size-5" />,
  },
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <SocialIcon id="email" className="size-5" />,
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Moni_Kaur_Resume.pdf',
    href: profile.resume.href,
    icon: <Download className="size-5" strokeWidth={1.4} />,
    download: true,
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = name.trim()
      ? `Portfolio enquiry from ${name.trim()}`
      : 'Portfolio enquiry'

    const body = [message.trim(), '', '—', 'Sent from the portfolio contact form'].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title={
        <>
          Let&rsquo;s build something
          <br className="hidden sm:block" /> meaningful.
        </>
      }
      lede="I’m looking for a software engineering or full-stack internship where I can keep building. If you have an opening, or you want to compare notes on a project, my inbox is open."
      className="pt-24 pb-28 md:pt-32 md:pb-36"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ------------------------------------------------------------ links */}
        <Reveal className="lg:col-span-7">
          <ul className="border-t border-line-soft">
            {contactLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...(link.download ? { download: '' } : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center gap-5 border-b border-line-soft py-6 transition-colors duration-500 hover:bg-white/[0.02] sm:px-3"
                >
                  <span className="text-ink-4 transition-colors duration-500 group-hover:text-accent">
                    {link.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.5625rem] tracking-[0.2em] text-ink-4 uppercase">
                      {link.label}
                    </span>
                    <span className="mt-1 block truncate text-[0.9375rem] text-ink-2 transition-colors duration-500 group-hover:text-ink">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-ink-4 transition-[transform,color] duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={profile.resume.href}
              download
              icon={<Download className="size-4" strokeWidth={1.8} />}
            >
              Download Resume
            </Button>
            <Button
              href={socials[0].href}
              variant="ghost"
              icon={<SocialIcon id="github" className="size-4" />}
              iconEnd={<ArrowUpRight className="size-3.5" strokeWidth={2} />}
            >
              GitHub
            </Button>
          </div>
        </Reveal>

        {/* ------------------------------------------------------------- form */}
        <Reveal className="lg:col-span-5" delay={0.1}>
          <form onSubmit={handleSubmit} className="panel p-7">
            <h3 className="font-display text-[1.0625rem] font-600 tracking-tight text-ink">
              Send a message
            </h3>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-3">
              This form opens your own mail app with the message pre-filled. Nothing is stored or
              sent from this page.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[0.5625rem] tracking-[0.2em] text-ink-4 uppercase"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Optional"
                  className="mt-2 w-full rounded-lg border border-line bg-base px-3.5 py-2.5 text-[0.875rem] text-ink placeholder:text-ink-4 transition-colors duration-400 focus:border-ink-4 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[0.5625rem] tracking-[0.2em] text-ink-4 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you working on?"
                  className="mt-2 w-full resize-y rounded-lg border border-line bg-base px-3.5 py-2.5 text-[0.875rem] leading-relaxed text-ink placeholder:text-ink-4 transition-colors duration-400 focus:border-ink-4 focus:outline-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 w-full"
              icon={<Send className="size-4" strokeWidth={1.8} />}
            >
              Open in mail app
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
