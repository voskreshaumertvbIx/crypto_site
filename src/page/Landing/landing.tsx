import React from 'react';
import Header from '../../components/header/header';
import SubMain from '../../components/sub_main/sub_main';
import Cooperate from '../../components/cooperate/cooperate';
import Features from '../../components/features/features';
import InviteTeam from '../../components/invite_team/invite_team';
import HowItWorks from '../../components/how_it_works/how_it_works';
import Testimonials from '../../components/testimonials/testimonials';
import Aboutus from '../../components/aboutus/aboutus';
import Footer from '../../components/footer/footer';
import UserCentricSteps from '../../components/steps/steps';
import PortfolioTracking from '../../components/portfolio_tracking/portfolio_traking';

const Landing = () => {
  return (
    <div>
     
      <SubMain />
      <Cooperate />
      <PortfolioTracking/>
      <Features />
      <InviteTeam />
      <UserCentricSteps />
      <HowItWorks />
      <Testimonials />
      <Aboutus/>
     
    </div>
  );
}

export default Landing;
