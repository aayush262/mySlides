import React from 'react';
import { Deck, Slide, Heading, Text, Link, Quote, Box, FlexBox, Grid, Stepper, Image } from 'spectacle';
import theme from '../theme';
export const Gig = () => {
    return (
        <>
            <Deck theme={theme}>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading color='' style={{ visibility: 'hidden' }} size={1}>Topic</Heading>

                    <Heading style={{ fontSize: '72px' }}>In Search of Gig Economy</Heading>
                    <Text style={{ textAlign: 'right', marginRight: '160px' }}> - Ian Brinkley </Text>
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>Gig Economy as a part of disruption?</Heading>
                    <Text style={{ fontSize: '35px' }}>- Digital services and platforms are changing the way labour markets work throughout the world.</Text>
                    <Text style={{ fontSize: '35px' }}>- The research aims to show the evidence of the impact of the emerging ‘gig economy’ at an aggregate level
                        and the need for better defnitions and measurement.</Text>
                    <Text style={{ fontSize: '35px' }} >- No evidence that the gig economy has increased the share of insecure employment in the
                        labour market.</Text>


                </Slide>
                
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>The gig economy and the future of work</Heading>
                    <Text style={{ fontSize: '35px' }}>- Gig economy is changing the nature of work, with marked declines 
in full time and regular employment and more jobs classifed as self-employed.</Text>
                    <Text style={{ fontSize: '35px' }} >- micro-buisness owner.</Text>
                    <Text style={{ fontSize: '35px' }} >- working as freelancers.</Text>


                </Slide>

                <Slide backgroundColor={'#F9F9F9'}>

                    <Text style={{ fontSize: '35px', marginTop:'90px' }}>- “Slowly but surely a revolution is taking shape – an entirely diferent kind of 
economy. The labor force of new entrepreneurs, which we call the Gig Economy, 
is growing a rapidly around the world and could soon represent as much as 50 per 
cent of the US workforce.”  </Text> <p style={{ textAlign: 'right'}} >(Micha Kaufman, co-founder and chief executive of Fiverr, 2015) 
    </p>
                    <Text style={{ fontSize: '35px' }} >“Freelancing is the new normal — and this survey shows that America’s new 
workforce is big, crucial, and here to stay,” </Text><p style={{ textAlign: 'right'}}>(Sara Horowitz, founder and executive director of Freelancers Union, 
commenting on a 2014 survey claiming that 53 million Americans now freelance)</p>
                   


                </Slide>
                 
(Micha Kaufman, co-founder and chief executive of Fiverr, 2015) 
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>Self-employment & the rise of professional 
freelancing</Heading>
                    <Text style={{ fontSize: '35px', padding: 0 }}>- Technological Advancement </Text>
                    <Text style={{ fontSize: '35px', padding: 0 }}>- changes in business models </Text>
                    <Text style={{ fontSize: '35px', padding: 0 }}>- emphasis on outsourcing</Text>
                    <Text style={{ fontSize: '35px', padding: 0 }}>- fewer people exiting self-employment than more people entering self-employment.</Text>
                    <p style={{fontSize:'24px'}}>2002 - 2010 showed overall slight increase in Self Employment & in 2012 & 2016 high skill self-employment grew much faster, a 2/3 of overall increase (Office for National Statistics, UK)</p>

                </Slide>

                <Slide backgroundColor={'#F9F9F9'}>
                    <Heading textAlign='left' size={2}>Freelancing</Heading>
                    <Text style={{ fontSize: '35px' }}>- working for yourself. </Text>
                    <Text style={{ fontSize: '35px' }} >- sub-contractor.</Text>
                    <p style={{fontSize:'24px'}}>In 2015, the number of freelancers was over 1.9 million people or about 6 per cent of total employment compared with 4 per cent in 1992. In education services the number of self-employed increased by 36 per cent between 2010 and 2015.</p>
                    <br></br>
                    <p style={{fontSize:'24px'}}>Researchers have proposed that perhaps the gig economy is operating below the radar, and we need to look elsewhere than in the aggregate official employment figures. (US AND UK)</p>
                
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>
                <Heading textAlign='left' size={2}>Where to Look?</Heading>
                    <Text style={{ fontSize: '35px' }}>- Tax returns. </Text>
                    <p style={{fontSize:'24px'}}>In the US employers have to file a tax return (called a 1099 form) each time they engage a freelancer or contingent worker and W2 for conventional employed labor. Looking at trends in both returns, 2008-2014
1099 returns increase at a faster pace.
</p>
                    <Text style={{ fontSize: '35px' }} >- Looking at the number of providers registered on digital platform websites..</Text>
                    <p style={{fontSize:'24px'}}>professional freelance sites such as Upwork with 2.5 million registered users was by far the biggest, there were another 280,000 drivers, messengers, and non-professional service providers operating through other sites such as Uber, Lyft, and Task Rabbit. (McKinsey Global Institute)</p>
                    <br></br>
                    
                    <br/>
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>
                <Heading textAlign='left' size={2}>Conclusion</Heading>
                    <Text style={{ fontSize: '35px' }}>- To fully understand the gig economy, we need to develop a range of indicators including looking at tax returns, small business statistics, more disaggregated analysis of particular markets and sectors, and regular surveys of digital platforms.</Text>
                    
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading color='' style={{ visibility: 'hidden' }} size={1}>Topic</Heading>

                    <Heading style={{ fontSize: '72px', justifyContent: 'center' }}>Thank you</Heading>
                </Slide>

            </Deck>
        </>
    );
}