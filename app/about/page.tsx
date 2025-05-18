import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | WebCraftStudio",
  description: "Learn about WebCraftStudio, our mission, values, and the team behind our web development services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-primary">WebCraftStudio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate web developers and designers dedicated to creating exceptional digital
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                WebCraftStudio was founded with a simple mission: to help businesses of all sizes establish a strong
                online presence that drives growth and success.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small freelance operation has grown into a full-service web development studio with a
                team of talented professionals who are passionate about creating exceptional digital experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in transparent communication, attention to detail, and delivering projects that exceed
                expectations. Our client-focused approach ensures that we understand your unique needs and goals,
                allowing us to create tailored solutions that help your business thrive online.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/images/undraw_memory-storage.svg"
                  alt="WebCraftStudio team"
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-1/2 rounded-lg bg-primary p-6 text-primary-foreground">
                <div className="flex h-full flex-col justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 opacity-50"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-lg font-medium">We turn your digital dreams into reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at WebCraftStudio
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every website we build is crafted with attention to detail and adheres
                to the highest standards of web development.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We believe in transparent communication and honest business practices. We always act in the best
                interest of our clients.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-muted-foreground">
                We put our clients at the center of everything we do. Your success is our success, and we're committed
                to helping you achieve your goals.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of web development trends and technologies to deliver cutting-edge solutions
                that give our clients a competitive edge.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe the web should be accessible to everyone. We design and develop websites that can be used by
                people of all abilities.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9.1 12a2.1 2.1 0 0 1 0 2.2" />
                  <path d="M14.9 12a2.1 2.1 0 0 0 0 2.2" />
                  <path d="M8 14.5a4 4 0 0 0 8 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-muted-foreground">
                We prioritize the security of our clients' websites and implement best practices to protect against
                threats and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented professionals behind WebCraftStudio
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full mb-4">
                <img
                  src="/images/profile.svg?height=400&width=400"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Asirbad Pradhan</h3>
              <p className="text-primary font-medium">Founder & Lead Developer</p>
              <p className="mt-2 text-muted-foreground">
                With over 2 years of experience in web development, Asirbad leads our team with expertise and vision.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full mb-4">
                <img
                  src="/images/profile.svg?height=400&width=400"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Khusi</h3>
              <p className="text-primary font-medium">UI/UX Designer</p>
              <p className="mt-2 text-muted-foreground">
                Khusi creates beautiful, intuitive user interfaces that provide exceptional user experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full mb-4">
                <img
                  src="/images/profile.svg?height=400&width=400"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Arsad</h3>
              <p className="text-primary font-medium">Full-Stack Developer</p>
              <p className="mt-2 text-muted-foreground">
                Arsad specializes in building robust, scalable web applications with modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
