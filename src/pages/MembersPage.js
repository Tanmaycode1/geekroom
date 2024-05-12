import MemberCard from "../component/MemberCard";
import BGSphere from "../component/BGSphere";
import './MembersPage.css'
import teamData from '../config/teamData.json'
import arnav from '../images/team_members/arnav.jpg'
import manas from '../images/team_members/manas .jpg'
import pratham from '../images/team_members/pratham_batra.jpg'



function MembersPage(){
   return (
      <section className="membersPage">
         
         <BGSphere width={'500px'} height={'480px'} x={'15%'} y={'50%'} color={'#5d2f1e'}/>
         <BGSphere width={'500px'} height={'480px'} x={'80%'} y={'50%'} color={'#14494c'}/>

         <header className="text-center">
            <h1>MEMBERS</h1>
            <p>Meet the team who put it all together</p>
         </header>
         <div className="co-founders-wrap">
            <h2>Co-Founders</h2>
            <div className="co-founders">
               <MemberCard name={'Manas Chopra'} title={'AI Head'} imageUrl={manas} linkedInUrl={'https://www.linkedin.com/in/themanas95826/ '} />
               <MemberCard name={'Arnav Gupta'} title={'AI Head'} imageUrl={arnav} linkedInUrl={'https://www.linkedin.com/in/arnav-gupta-437a66256/ '} isRedTheme={0}/>
               <MemberCard name={'Pratham Batra'} title={'AI Head'} imageUrl={pratham} linkedInUrl={'https://www.linkedin.com/in/pratham1908/ '} />
            </div>
         </div>


         <div className="department-wrap">
            <h2>Heads Of Departments</h2>
            <div className="departments">
               {Object.keys(teamData).map(dep => (
                  <Department name={dep}  />
               ))}
            </div>
         </div>
         
      </section>
   )
}

// Department Heads
const Department =({name})=>(
   <div className="department">
      <h2> {name} </h2>
      <div className="members">
         {teamData[name].map((member, index) => {
            return <MemberCard key={index} name={member.name} title={member.title} imageUrl={member.imageUrl} linkedInUrl={member.linkedInUrl} />
         })}
      </div>
   </div>
)
 

export default MembersPage;