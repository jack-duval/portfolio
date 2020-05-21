import React from 'react';
import './experience-item.css';

class ExperienceItem extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.employer}: {this.props.role}</h4>
                <p>({this.props.startDate} - {this.props.endDate})</p>
                <p>
                    Duties:
                        <p className="list-indent">
                            {this.props.duties}
                        </p>
                </p>
                <p>
                    Responsibilities:
                        <p className="list-indent">
                            {this.props.responsibilities}
                        </p>
                  </p>
            </div>

        );
    }
}

export default ExperienceItem;