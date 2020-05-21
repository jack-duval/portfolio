import React from 'react';
import ExperienceItem from './experience-item.js';

class ExperienceList extends React.Component {
    render() {
        return (
            <div className="experience-layout">
                <h3 className="section-title">
                    Experience:
                </h3>
                <ExperienceItem 
                    employer="Edmit"
                    role="Chief of Staff"
                    startDate="August 2019"
                    endDate="Present"
                    duties="Assist partnerships."
                    responsibilities="Work hard."
                />

                <ExperienceItem 
                    employer="Edmit"
                    role="Software Engineering Intern"
                    startDate="May 2019"
                    endDate="August 2019"
                    duties="Code."
                    responsibilities="Work hard."
                />

                <ExperienceItem 
                    employer="Apple"
                    role="Specialist"
                    startDate="February 2020"
                    endDate="Present"
                    duties="Customer happiness."
                    responsibilities="Work hard."
                />

                <ExperienceItem 
                    employer="Northeastern University"
                    role="Student Affairs Tech Specialist"
                    startDate="August 2018"
                    endDate="May 2019t"
                    duties="Help faculty etc."
                    responsibilities="Work hard."
                />
            </div>
        );
    }
}

export default ExperienceList;