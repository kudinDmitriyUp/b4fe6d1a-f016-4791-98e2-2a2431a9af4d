"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Award, Users, Shield, Star, Heart, HelpCircle, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="BasketPro"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106835485-5aciizuh.jpg"
          logoAlt="BasketPro Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Shop Now", href: "products" }}
          className="w-full max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Championship Quality Basketballs"
          description="Shop premium basketballs for professionals, amateurs, and training. Discover the perfect ball for your game with our carefully curated collection of top brands."
          tag="Premium Sports Equipment"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106836203-ppgiwhj4.jpg"
          imageAlt="Professional basketball on court"
          frameStyle="card"
          buttons={[
            { text: "Browse Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We are committed to bringing you the finest basketball equipment on the market. Quality, performance, and authenticity guide every product we offer."
          features={[
            {
              icon: Award,
              title: "Premium Quality",
              description: "All basketballs meet official league standards with superior durability and performance for competitive play."
            },
            {
              icon: Zap,
              title: "Top Brands",
              description: "We partner with industry-leading manufacturers to bring you authentic products you can trust."
            },
            {
              icon: Users,
              title: "Community Focused",
              description: "Supporting athletes from beginners to professionals with equipment that matches their dedication."
            },
            {
              icon: Shield,
              title: "Guaranteed Authenticity",
              description: "Every product is verified authentic with full warranty protection and hassle-free returns."
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Basketball Collection"
          description="Discover our selection of premium basketballs designed for every skill level and playing environment."
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Professional Indoor Basketball",
              price: "$79.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106838830-nob4yp16.jpg",
              imageAlt: "Professional indoor basketball"
            },
            {
              id: "2",
              name: "Outdoor Court Basketball",
              price: "$59.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106839524-s6ljiuv4.jpg",
              imageAlt: "Outdoor recreational basketball"
            },
            {
              id: "3",
              name: "Training Basketball Set",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106840753-xgt1dwbp.jpg",
              imageAlt: "Training basketball equipment"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Players Say"
          description="Hear from athletes who trust us for their basketball equipment needs."
          tag="Customer Stories"
          tagIcon={Heart}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "College Basketball Coach",
              company: "State University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106841432-ha5403sv.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Professional Player",
              company: "National League",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106842214-0jbbdmc1.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "James Williams",
              role: "High School Coach",
              company: "Central High School",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106842798-vcb7wufx.jpg",
              imageAlt: "James Williams"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Recreational Player",
              company: "Community Center",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106843511-toyi46ho.jpg",
              imageAlt: "Lisa Anderson"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Our basketballs are chosen by top athletic organizations and professionals worldwide."
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106844153-ekra54s5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106845131-ri2rzhio.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106845617-knvao0p3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106846404-24nbx273.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106846994-v52t033i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106847466-mujb3eea.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106848391-6rqjmghe.jpg"
          ]
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our basketballs and ordering process."
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What sizes do you offer?",
              content: "We offer basketballs in all official sizes including size 7 (men's regulation), size 6 (women's regulation), and size 5 (youth). Each product listing clearly specifies the size and recommended age group."
            },
            {
              id: "2",
              title: "Are all basketballs official league approved?",
              content: "Yes, all our premium basketballs meet official NBA, WNBA, and college league standards. Each product description includes certification information and official league approvals."
            },
            {
              id: "3",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all unused basketballs. If you're not satisfied with your purchase, contact our customer service team for a full refund or exchange."
            },
            {
              id: "4",
              title: "Do you offer bulk pricing?",
              content: "Yes! We offer special pricing for team purchases and bulk orders. Contact our sales team at sales@basketpro.com to discuss bulk discounts for your organization."
            },
            {
              id: "5",
              title: "How do I care for my basketball?",
              content: "To extend the life of your basketball, clean it regularly with a damp cloth, store it in a cool dry place, and maintain proper inflation. Avoid leaving it in direct sunlight or extreme temperatures."
            },
            {
              id: "6",
              title: "How long does shipping take?",
              content: "Most orders ship within 2 business days. Standard shipping takes 5-7 business days, while express shipping arrives in 2-3 business days. You'll receive tracking information when your order ships."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated on New Releases"
          description="Subscribe to our newsletter for exclusive deals, new product launches, and basketball tips from professionals."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. By subscribing, you agree to receive marketing emails from BasketPro."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764106835485-5aciizuh.jpg"
          logoAlt="BasketPro Logo"
          copyrightText="© 2025 BasketPro. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Indoor Basketballs", href: "products" },
                { label: "Outdoor Basketballs", href: "products" },
                { label: "Training Equipment", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}