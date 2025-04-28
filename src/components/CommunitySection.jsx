export default function CommunitySection(){
    return(<>
  <h2 className="text-2xl font-semibold mb-6"> <span className="p-0.5 bg-bprimary mr-2"></span> Join Our Growing Community</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div className="bg-secondary-content rounded">
      <div className="stat shadow"> {/* DaisyUI stat component */}
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 15H3m12 0a4 4 0 110-5.292m0 0V19.5m-7-7h14m-7 7a4 4 0 110 5.292m0 0V4.5"></path></svg>
        </div>
        <div className="stat-title">Beginner Developers</div>
        <div className="stat-value text-primary">100+</div>
        <div className="stat-desc">And growing every day!</div>
      </div>
    </div>

    <div className="bg-secondary-content rounded">
      <div className="stat shadow">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zm-7 8h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zm-7-8h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
        </div>
        <div className="stat-title">Weekly Projects</div>
        <div className="stat-value text-primary">10+</div>
        <div className="stat-desc">New challenges every week.</div>
      </div>
    </div>

    <div className="bg-secondary-content rounded">
      <div className="stat shadow">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div className="stat-title">Helpful Mentors</div>
        <div className="stat-value text-primary">5+</div>
        <div className="stat-desc">Get guidance from experienced devs.</div>
      </div>
    </div>
  </div>
    </>);
}