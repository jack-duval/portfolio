import React from 'react';
import './experience-item.css';

class ExperienceItem extends React.Component {
    render() {
        return (
            <div>
            <li>
                <h4>{this.props.employer}:</h4>
                <p>
                    {this.props.role}
                </p>
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
            </li>
            </div>

        );
    }
}

export default ExperienceItem;