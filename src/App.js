import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import CharityCard from "./Components/CharityCard/CharityCard";
import DonateCard from "./Components/DonateCard/DonateCard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { Provider } from "./Components/Context/Context";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Donations from "./Components/Donations/Donations";
import DonationServices from "./Components/DonationServices/DonationServices";
import FundsScanCard from "./Components/FundsScanCard/FundsScanCard";
import DonateProcess from "./Components/DonateProcess/DonateProcess";
import DonateProcessCards from "./Components/DonateProcessCards/DonateProcessCards";
import Organics from "./Components/Organics/Organics";
import About from "./Components/About/About";
import ContactMe from "./Components/ContactMe/ContactMe";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp/SignUp.tsx";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import Banner from "./Components/Banner/Banner";
import Journey from "./Components/Journey/Journey";
import { useState } from "react";
import Share from "./Components/Share/Share";
import BanStats from "./Components/BanStats/BanStats";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <Provider>
        <BrowserRouter>
          <ScrollToTop />

          <Switch>
            <Route exact path="/">
              <Navbar />
              <Banner />
              <BanStats />
              <Share />
              <Journey />
              <Cards />
              <CharityCard />
              <DonateCard />
              <Footer />
            </Route>
            <Route exact path="/donations">
              <Navbar />
              <Donations />
              <DonationServices />
              <FundsScanCard />
              <Footer />
            </Route>
            <Route exact path="/donationprocess">
              <Navbar />
              <DonateProcess />
              <DonateProcessCards />
              <Footer />
            </Route>
            <Route exact path="/getinvolved">
              <Navbar />
              <GetInvolved />
              <Footer />
            </Route>
            <Route exact path="/organics">
              <Navbar />
              <Organics />
              <Footer />
            </Route>
            <Route exact path="/aboutus">
              <Navbar />
              <About />
              <Footer />
            </Route>
            <Route exact path="/contactme">
              <Navbar />
              <ContactMe />
              <Footer />
            </Route>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route>
              <Navbar />
              <NotFound />
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  );
};

export default App;

