import React from 'react';

import { Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';

import CustomButton from '../Button/Button';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';

import resumeData from '../../utilis/resumeData';

import ProfilePic from '../../assets/images/profile.jpg';
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem >
        <CustomTimelineSeparator/>
        <TimelineContent className='timeline_content'>
            {link ? (
                <Typography className='timelineItem_text'>
                <span>{title}:</span> {" "}
                <a href={link} target='_blank'>{text}</a>
                </Typography>
            ) : (
                <Typography className='timelineItem_text'>
                <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
    
);

const Profile = () => {
return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
        </div>
            
        <figure className='profile_image'>
            <img src={ProfilePic} alt="profileimg"/>
        </figure>

        <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
                <CustomTimelineItem title='Name' text={resumeData.name} />
                <CustomTimelineItem title='Title' text={resumeData.title} />
                <CustomTimelineItem title='Email' text={resumeData.email} />
                <CustomTimelineItem title='City' text={resumeData.city} />

                {Object.keys(resumeData.socials).map(key => (
                    <CustomTimelineItem title={key} text={resumeData.socials[key].icon} link={resumeData.socials[key].link}/>
                ))}
            </CustomTimeline>
            <div className='btn_container'>
                <CustomButton text={'Download CV'} icon={<GetAppIcon />}/>
            </div>
            
            
            
        </div>
    </div>
    )
}

export default Profile;