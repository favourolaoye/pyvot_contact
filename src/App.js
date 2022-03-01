
import './App.css';

function App() {
  return (

    <div className="wrapper">
    <div className="sidebar">
        
        <ul>
            <li><a href= "home"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="/"><i className="fas fa-comment"></i>Chat</a></li>
            <li><a href="/"><i className="fas fa-money-bill"></i> Bills</a></li>
            <li><a href="/"><i className="fas fa-project-diagram"></i>New Project</a></li>
        </ul> 

      <div className="Logout">
        <button>Logout</button>
      </div>

    </div>

    <div className="main_content">
        <div className="header"> <h3>Welcome Back!!, <b className="name">David</b></h3> 
         <div className="notify">
           <ul>
             <li><a href="/"><i className="fas fa-bell"></i></a></li>
             <li><a href="/"><i className="	far fa-user-circle"></i></a></li>
           </ul>
         </div>
        </div>  

        <div className="info">
         <h3>My projects</h3>
        
         <div className="container">

           <div className="ongoing">
             <h3> <span> <i className='fa fa-spinner'></i> </span> Ongoing</h3>
               <div className="detail-card">
                 <h4 className='title'>FOOD WEBSITE</h4>
                 <p className="date">Date: 22, May 2021</p>
                <p className='d-day'>Deploy Date: 23, Febuary 2022 </p>
                <p className='Bill'>Bill: 250,000 naira </p>
                <p className="status">Status: In progress</p>
               </div>
           </div>

           <div className="completed">
              <h3>Completed</h3>
              <div className="detail-card">
                 <h4 className='title'>FOOD WEBSITE</h4>
                 <p className="date">Date Acquianted: 24, November 2021</p>
                <p className='d-day'>Deploy Date: 28, January 2022 </p>
                <p className="status">Status: deployed</p>
                <p className="disputes">Disputes: none</p>
              </div>
           </div>

         </div>

      </div>

    </div>
   
</div>
  );
}

export default App;
