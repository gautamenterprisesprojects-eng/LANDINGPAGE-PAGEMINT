import type { Metadata } from 'next'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact PageMint — Get in Touch',
  description: 'Contact PageMint for product enquiries, sales, support, and partnership opportunities. A Unit of Gautam Enterprises.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-28 pb-20 lg:pt-36">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <div className="badge mb-6">Contact Us</div>
                <h1 className="hero-headline mb-5">Let&apos;s talk publishing.</h1>
                <p className="body-large mb-8">
                  Whether you have questions about PageMint, want to see a demonstration,
                  or are ready to start a conversation about your publishing workflow —
                  we&apos;re here.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@pagemint.in', href: 'mailto:hello@pagemint.in' },
                    { icon: Phone, label: 'Phone', value: '+91 (0) 000 000 0000', href: 'tel:+910000000000' },
                    { icon: MapPin, label: 'Address', value: 'India — PageMint, A Unit of Gautam Enterprises', href: '#' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-[#f5f3ef] border border-[#e2ded8]">
                      <div className="w-9 h-9 rounded-lg bg-[#f0fdf7] border border-[#dcfced] flex items-center justify-center text-[#16a257] flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#6b6860] mb-0.5">{label}</div>
                        <a href={href} className="text-sm font-medium text-[#1a1916] hover:text-[#16a257] transition-colors">
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 rounded-xl bg-[#f0fdf7] border border-[#dcfced]">
                  <p className="text-sm font-semibold text-[#1a1916] mb-1">Want a live demonstration?</p>
                  <p className="text-sm text-[#4a4845] mb-3">
                    See PageMint generate a complete newspaper with your own content.
                  </p>
                  <Link href="/request-demo" className="btn-primary inline-flex text-sm py-2.5 px-5">
                    Request Demo <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="bg-white rounded-2xl border border-[#e2ded8] p-8 shadow-lg">
                <h2 className="text-xl font-bold text-[#1a1916] mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="contactFirstName">First name</label>
                      <input id="contactFirstName" type="text" className="form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contactLastName">Last name</label>
                      <input id="contactLastName" type="text" className="form-input" placeholder="Last name" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contactEmail">Email address *</label>
                    <input id="contactEmail" type="email" required className="form-input" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contactOrg">Organisation</label>
                    <input id="contactOrg" type="text" className="form-input" placeholder="Your publication or organisation" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contactSubject">Subject</label>
                    <select id="contactSubject" className="form-select">
                      <option value="">Select topic</option>
                      <option>Product Enquiry</option>
                      <option>Demo Request</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Press / Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contactMessage">Message *</label>
                    <textarea
                      id="contactMessage"
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
