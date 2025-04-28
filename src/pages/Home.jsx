import Banner from "../components/Banner";
import CommunitySection from "../components/CommunitySection";
import FeaturedProject from "../components/FeaturedProjects";
import HowItWorks from "../components/HowItWorks";

export default function Home(){
    return(
        <>
        <header>
            <Banner />
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 overflow-x-hidden text-gray-600">

        <section className="mb-16">
        <FeaturedProject />
        </section>

        <section className="mb-16 text-gray-600">
          {/* Community Highlights */}
          <CommunitySection />
        </section>

        <section className="mb-16 text-gray-600">
          {/* How It Works */}
          <HowItWorks />
        </section>
        <section className="mb-16 bg-base-100 rounded-lg shadow-md py-12 text-center text-gray-600">
  <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-6">Ready to Start Your Learning Journey?</h2>
    <p className="mb-8">Join our supportive community today and begin building real-world projects that will accelerate your development skills.</p>
    <button className="btn btn-primary btn-lg text-white">Join the Community Now</button> {/* DaisyUI secondary, large button */}
  </div>
</section>
        </main>
        <hr className="text-primary "/>
        <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500  ">
  <p>&copy; {new Date().getFullYear()} Your Developer Community. All rights reserved.</p>
  <div className="mt-4">
    <a href="/terms" className="hover:underline mr-4">Terms of Service</a>
    <a href="/privacy" className="hover:underline">Privacy Policy</a>
  </div>
</footer>
        </>
    );
}