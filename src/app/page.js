import Banner from "@/components/Banner";
import Image from "next/image";
import client1 from "../../src/assets/images/client1.png";
import client2 from "../../src/assets/images/client2.png";
import client3 from "../../src/assets/images/client3.png";
import client4 from "../../src/assets/images/client4.png";
import client5 from "../../src/assets/images/client5.png";
import PojectPreview from "@/components/PojectPreview";
import compo1 from "../../src/assets/images/Component1.png";
import compo2 from "../../src/assets/images/Component2.png";
import feature1 from "@/assets/images/Frame33.png";
import feature2 from "@/assets/images/Frame34.png";
import feature3 from "@/assets/images/Group17.png";

import Link from "next/link";
import ExperienceIcon from "@/assets/icon/ExperienceIcon";
import CustomTemplateICon from "@/assets/icon/CustomTemplateICon";
import SupportIcon from "@/assets/icon/SupportIcon";
import ComplianceIcon from "@/assets/icon/ComplianceIcon";
import HighQualityIcon from "@/assets/icon/HighQualityIcon";
import ProductivityIcon from "@/assets/icon/ProductivityIcon";
import Pricing from "@/components/Pricing";
import Accordian from "@/components/Accordian";
import CustomerCard from "@/components/CustomerCard";

export default function Home() {
  const items = [
    {
      question: "Can I use Animify for free?",
      answer:
        "Yes! Animify offers a free tier with access to basic features. You can create up to 5 projects per month with a watermark on exports. For unlimited projects and watermark-free exports, consider upgrading to a paid plan.",
    },
    {
      question: "Why should I upgrade to the Starter plan?",
      answer:
        "The Starter plan unlocks premium features including:\n- 50 projects per month\n- HD 1080p exports\n- Access to 100+ premium templates\n- Priority email support\n- No Animify watermark\nIt's perfect for freelancers and small businesses.",
    },
    {
      question: "How does workspace billing work?",
      answer:
        "Workspace billing is simple:\n1. The workspace owner sets up billing\n2. You're charged monthly for each active member\n3. Add/remove team members anytime\n4. Billing automatically adjusts\n5. Receive invoices via email\nEnterprise plans offer annual billing options.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel:\n1. Go to Account Settings\n2. Click 'Billing'\n3. Select 'Cancel Subscription'\n4. Follow the prompts\nYour access continues until the end of your billing period. You can reactivate anytime.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer full refunds within 14 days of purchase if:\n- You haven't used the service extensively\n- The refund request is for your first payment\n- The request meets our Terms of Service\nContact support@animify.com with your receipt for refund requests.",
    },
  ];
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Due to Images Issue I commit this Section */}
      {/* <PojectPreview /> */}
      {/* Client Section */}
      <section className="our-client">
        <div className="container">
          <h2>Our Clients</h2>
          <marquee>
            <div className="flex justify-between items-center">
              <Image src={client1} alt="client" />
              <Image src={client2} alt="client" />
              <Image src={client3} alt="client" />
              <Image src={client4} alt="client" />
              <Image src={client5} alt="client" />
            </div>
          </marquee>
        </div>
      </section>
      {/* feature Section */}
      <section className="feature-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2>Features and benefits</h2>
            <p>
              Create, customize, and collaborate effortlessly with our intuitive
              platform. From simple edits to complex designs, bring your vision
              to life in no time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="w-3/5 p-2 ">
              <div className="featue-card">
                <h3>Easy-to-Use Interface</h3>
                <p>
                  Users can quickly start using the platform without needing a
                  steep learning curve.
                </p>
                <Link href={"#"}>
                  Try it now <i className="bi bi-arrow-right"></i>
                </Link>

                <div className="feature-img">
                  <Image src={compo1} alt="feature" />
                  <Image src={compo2} alt="feature" />
                </div>
              </div>
            </div>
            <div className="w-2/5 p-2">
              <div className="featue-card">
                <div className="image">
                  <span>
                    <Image src={feature1} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature2} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature3} alt={"Asdas"} />
                  </span>
                </div>
                <h3>Collaboration Tools</h3>
                <p>
                  Explanation: If your product enables collaboration, emphasize
                  the ability for teams to work together in real time.
                </p>
                <Link href={"#"}>
                  Try it now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="w-1/2 p-2 ">
              <div className="featue-card">
                <div className="image">
                  <span>
                    <Image src={feature1} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature2} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature3} alt={"Asdas"} />
                  </span>
                </div>
                <h3>Secure Cloud Storage</h3>
                <p>
                  With cloud storage, users’ projects are automatically saved,
                  ensuring their data is never lost.
                </p>
                <Link href={"#"}>
                  Try it now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="featue-card">
                <div className="image">
                  <span>
                    <Image src={feature1} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature2} alt={"Asdas"} />
                  </span>
                  <span>
                    <Image src={feature3} alt={"Asdas"} />
                  </span>
                </div>
                <h3>Wide Integration Support</h3>
                <p>
                  The ability to integrate with third-party apps (e.g., Google
                  Drive, Dropbox, Slack) is essential for users who rely on a
                  suite of tools.
                </p>
                <Link href={"#"}>
                  Try it now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose Section */}
      <section className="choose-section">
        <div className="container">
          <div className=" flex flex-col items-center">
            <h2>Why choose us</h2>
            <p>
              Unlock the full potential of your business with exceptional
              features and unmatched performance.
            </p>
          </div>
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(107, 73, 255, 0.38) 26%, rgba(255, 255, 255, 0.1) 45%)",
              borderRadius: 20,
            }}
          >
            {" "}
            <div className="choose-inner flex flex-wrap  justify-between items-center">
              <div className="w-1/3 choose-card ">
                <ExperienceIcon />

                <h3>Intuitive User Experience</h3>
                <p className="mb-10">
                  Start a quick with a user-friendly interface designed for
                  maximum easy and efficiency.
                </p>
              </div>
              <div className="w-1/3 choose-card ">
                <ProductivityIcon />

                <h3>Boost Productivity</h3>
                <p className="mb-10">
                  Use pre-default transitions to save time and productivity.
                </p>
              </div>
              <div className="w-1/3 choose-card ">
                <CustomTemplateICon />
                <h3>Customizable Templates</h3>
                <p className="mb-10">
                  Get ready made customizable templates for your projects.
                </p>
              </div>
              <div className="w-1/3 choose-card ">
                <SupportIcon />

                <h3>24/7 Support</h3>
                <p>
                  Get instant assistance anytime with our intelligent, always
                  available assistant.
                </p>
              </div>
              <div className="w-1/3 choose-card ">
                <ComplianceIcon />

                <h3>Data Security & Compliance</h3>
                <p>
                  Safeguard your operations with industry-leading standards.
                </p>
              </div>
              <div className="w-1/3 choose-card ">
                <HighQualityIcon />
                <h3>High-Quality Export</h3>
                <p>
                  High-quality export options allow users to download their
                  content in formats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* explore Section */}
      <section className="explore-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2>Explore All Plan</h2>
          </div>
          <div className="flex justify-between items-center inner-pricing">
            <div className="w-[32%]">
              <Pricing title={"Starter"} price={"0"} />
            </div>
            <div className="w-[32%]">
              <Pricing title={"Professional"} price={"20"} />
            </div>
            <div className="w-[32%]">
              <Pricing title={"Enterprise"} type={"Custom"} />
            </div>
          </div>
        </div>
      </section>
      {/* explore Section */}
      <section className="explore-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="inner-accordian">
            <Accordian items={items} />
          </div>
        </div>
      </section>
      {/* customer Section */}
      <section className="customer-section">
        <div className="container">
          <div className=" flex flex-col items-center">
            <h2>Our Customers</h2>
            <p>What people say about us</p>
          </div>
          <marquee direction="left">
            <div className="flex gap-[20px] items-center">
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
            </div>
          </marquee>
          <marquee direction="right">
            <div className="flex gap-[20px] items-center">
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
            </div>
          </marquee>
        </div>
      </section>
      {/* getstart Section */}
      <section className="getstart-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2>Get Started</h2>
            <p>
              Holds no opinions on what’s and how’s. Build whatever makes sense
              to you.
            </p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <button className="btn-primary-style">Try it now</button>
            <button className="btn-secondary-style">Book your demo</button>
          </div>
        </div>
      </section>
    </>
  );
}
