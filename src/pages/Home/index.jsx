import '../../style/Home.css';

function Home(props) {
  
  const name = props.mainData.data.userInfos.firstName

    return (
      <h1> Bonjour Bonjour {name}</h1>
    )




}

export default Home;
