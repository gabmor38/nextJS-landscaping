/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css"; 


export default function Services() {
  return (
    <div id="services" className="mt-5 mb-5" style={{display: 'flex', flexDirection: 'column'}}>

        <div className="mx-auto p-2 flex flex-column">
          <h2 className="text-2xl text-center font-bold">Residential and Commercial Landscaping Services</h2>
        </div>

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="/pic1.png" className="card-img-top card-img-fixed" alt="Mulched stone garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Lawn Mowing</h4>
                  <p className="card-text">Lawn mowing available weekly or biweekly, with optional spring and fall cleanups.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <img src="/pic2.png" className="card-img-top card-img-fixed" alt="Earthy Zen garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Retaining Walls & Patios</h4>
                 <p className="card-text">Installation of patios and retaining walls for functional and attractive garden spaces.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <img src="/pic3.png/"className="card-img-top card-img-fixed" alt="Low-maintenance garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Garden Installation</h4>
                  <p className="card-text">Offering professional garden installation projects, including the design and installation of new and updated gardens.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
                <img src="/pic9.png/"className="card-img-top card-img-fixed" alt="Natural evergreen privacy fence"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Yard Work (On-Demand)</h4>
                  <p className="card-text">Flexible, on-demand yard work services to meet your immediate landscaping needs.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
                <img src="/pic5.png/"className="card-img-top card-img-fixed" alt="flower bed"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Spring & Fall Clean-Ups</h4>
                  <p className="card-text">Comprehensive seasonal clean-ups to refresh and prepare your yard for the changing seasons.</p>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 ">
                <img src="/pic4.png/"className="card-img-top  card-img-fixed" alt="sod and soil transformation" height='280px'/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Sod Installation</h4>
                  <p className="card-text">Proven installation of sod to create new lawns or replace existing ones.</p>
                </div>
              </div>
            </div>
            <div className=" mb-5"></div>
          </div>
        </div>
    </div>
   
  );
}
