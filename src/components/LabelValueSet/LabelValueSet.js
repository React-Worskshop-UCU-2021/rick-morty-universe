import Label from '../Label';
import Value from '../Value';

import './LabelValueSet.scss';

const LabelValueSet = ({ label, value }) => {
    return (
        <div className="LabelValueSet">
            <Label label={label} />
            <Value value={value} />
        </div>
    );
};

export default LabelValueSet;
