import React from 'react';
import { Deck, Slide, Heading, Text, Link, Quote, Box, FlexBox, Grid, Stepper, Image } from 'spectacle';
import theme from '../theme';
export const Presentation = () => {
    return (
        <>
            <Deck theme={theme}>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading color='' style={{ visibility: 'hidden' }} size={1}>Topic</Heading>

                    <Heading style={{fontSize:'72px'}}>Tips and Tricks on creating a Research Poster</Heading>
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>What is a Research Poster?</Heading>
                    <Text  style={{fontSize:'35px'}}>- a summary of your research with interesting and concise commentary about what you learned along the way.</Text>
                    <Text style={{fontSize:'35px'}} >- a balance of visuals and text.</Text>


                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>
                    {/* <Heading textAlign='left' size={3}>Example</Heading> */}
                    {/* <Text size={3}>- a summary of your research with interesting and concise commentary about what you learned along the way.</Text>
                    <Text size={3}>- a balance of visuals and text.</Text>  */}
                     <h5 style={{ margin: '10px auto', fontSize:'20px' }} >Example of a good poster</h5>   
                    <Image style={{ margin: 'auto' }} height='100%' src='https://static.wixstatic.com/media/b6a543_9d3454ead9734e1a9c2aec47679fa313~mv2.png/v1/fill/w_2342,h_1738,al_c,q_95/b6a543_9d3454ead9734e1a9c2aec47679fa313~mv2.webp'></Image>

                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>Questions to ask when desingning a poster</Heading>
                    <Text  style={{fontSize:'35px'}}>1.What is the most important / interesting finding from my research?</Text>
                    <Text style={{fontSize:'35px'}} >2.How can I visually share my research?</Text>
                    <Text style={{fontSize:'35px'}} >3.How can people find out more about my work?</Text>                 


                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading textAlign='left' size={2}>What makes a good poster?</Heading>
                    <Text  style={{fontSize:'35px',padding:0}}>- Title should be short and interesting</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Important information should be readable from about 10 feet away</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Word count of about 300 to 800 words</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Text should clear and to the point</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Effective use of graphics, color and fonts</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Use of bullets, numbering, and headlines</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Consistent and clean layout</Text>
                    <Text  style={{fontSize:'35px',padding:0}}>- Include acknowledgments, your name and institutional affiliation</Text>
                </Slide>

                <Slide backgroundColor={'#F9F9F9'}>
                    {/* <Heading textAlign='left' size={3}>Example of a Bad Poster</Heading> */}
                    <h5 style={{ margin: 'auto' }} >Example of a Bad Poster</h5>
                    <Image style={{ margin: 'auto' }} height='97%' width='80%' src='http://2.bp.blogspot.com/-TX-czGDQq7k/TbbTIakxorI/AAAAAAAAD-A/L_HimTsZc0s/s1600/breast_cancer_critique.png'></Image>

                </Slide>
                
                <Slide backgroundColor={'#F9F9F9'}>
                <Heading textAlign='left' size={2}>WHAT SOFTWARE TO USE?</Heading>
                    <Text  style={{fontSize:'35px'}}>- Microsoft Powerpoint.</Text>
                    <Text style={{fontSize:'35px'}} >- Photoshop, Illustrator, InDesign.</Text>
                    <Text style={{fontSize:'35px'}} >- Corel Draw.</Text>
                    <Text style={{fontSize:'35px'}} >- Gimp.</Text>
                </Slide>
                <Slide backgroundColor={'#F9F9F9'}>

                    <Heading color='' style={{ visibility: 'hidden' }} size={1}>Topic</Heading>

                    <Heading style={{fontSize:'72px',justifyContent:'center'}}>Thank you</Heading>
                </Slide>

            </Deck>
        </>
    );
}