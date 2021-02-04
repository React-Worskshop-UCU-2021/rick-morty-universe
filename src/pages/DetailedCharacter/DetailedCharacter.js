import './DetailedCharacter.scss';
import Tag from '../../components/Tag';
import LabelValueSet from '../../components/LabelValueSet';
import Label from '../../components/Label';
import Value from '../../components/Value';
import { useParams } from 'react-router-dom';

const DetailedCharacter = ({ selectCharacter }) => {
    const { id } = useParams();
    const character = selectCharacter(Number(id));
    console.log('character', character);
    const { name, status, gender, species, origin, created, image, episode } =
        character || {};

    return character ? (
        <div className="DetailedCharacter">
            <div className="DetailedCharacter__imageContainer">
                <img src={image} className="DetailedCharacter__image" />
            </div>
            <div className="DetailedCharacter__description">
                <h1 className="DetailedCharacter__heading">
                    #{id} {name}
                </h1>
                <div className="DetailedCharacter__tagsContainer">
                    <Tag children={status} />
                    <Tag children={gender} />
                </div>
                <div className="DetailedCharacter__mainInfo">
                    <LabelValueSet label="Species: " value={species} />
                    <LabelValueSet label="Origin: " value={origin.name} />
                    <LabelValueSet label="Birthday: " value={created} />
                    <LabelValueSet label="Last Known location: " value={'hz'} />
                    <LabelValueSet label="Last Known location:" value={'hz'} />
                    <LabelValueSet label="First seen in: " value={'hz'} />
                </div>
                <div className="DetailedCharacter__episodes">
                    <Label label="Episodes: " />
                    {episode.map((episode) => (
                        <Value value={episode} key={episode} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className="DetailedCharacter">Error 404: Not Found</div>
    );
};

export default DetailedCharacter;
