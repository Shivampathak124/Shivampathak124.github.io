import React from 'react'
import "./AboutSection.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


function AboutSection() {
    return (
        <div id='about' className='about section'>
            <h1>About Me</h1>
            <p id="user-detail-intro">
                A Full Stack Web Developer with expertise is <b>MERN</b> Stack. I've completed a comprehensive <b>Full Stack Development course</b> at Masai and have solved over 600 DSA problems. My tech toolkit includes <b>HTML, CSS, JavaScript, Java, Git, React, and Redux.</b> I'm passionate about creating efficient, elegant code and have experience in both front-end and back-end development. I thrive on problem-solving and love collaborating with teams to build innovative solutions. Let's connect and turn ideas into reality through technology. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a>.
            </p>
            <div className='education_card'>

                <h2>Education</h2>
                <div>
                    {/* timeline starts here */}
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.05,
                            },
                        }}
                    >
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>Full Stack Web Development</h2>
                                    <p>Masai School, Banglore</p>
                                    <p>Februray 2023 - Present | Remote</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>B.tech - Computer science</h2>
                                    <p>Chandigarh group of colleges</p>
                                    <p>August 2019 - August 2023</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>Intermediate (12th)</h2>
                                    <p>Tulsi Smark inter college</p>
                                    <p>July 2018 - Jun 2019</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    {/* timeline Ends here */}
                </div>
            </div>
        </div>
    )
}

export default AboutSection
