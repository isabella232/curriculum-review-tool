import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";
import ContentCriterionComponent from "./ContentCriterionComponent";
import FieldLevelErrorMessageComponent from "../../common/FieldLevelErrorMessageComponent";

export default class ContentCriterionRow extends React.Component {

    render() {
        return (
            <React.Fragment>
                <li className="o-survey">
                    <div className="o-survey_number">
                        <h3>{this.props.row.indicatorNumber}</h3>
                    </div>
                    <div className="o-survey_indicator">
                        <h4 className="h3">Indicator</h4>
                        <p>{this.props.row.indicatorText}</p>
                    </div>
                    <div className="o-survey_components">
                        <h4 className="h3">Component</h4>
                        {
                        this.props.row.components.map(
                            (componentData, i) =>
                            <ContentCriterionComponent key={i} {...this.props} component={componentData} />)
                        }
                    </div>
                </li>
            </React.Fragment>
        );
    }
}
