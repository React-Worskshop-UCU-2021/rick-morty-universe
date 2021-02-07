import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { getCharacter } from '../../api';
import Tag from '../../components/Tag';
import LabelValueSet from '../../components/LabelValueSet';
import Label from '../../components/Label';
import Value from '../../components/Value';

import './DetailedCharacter.scss';

const DetailedCharacter = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState();

    useEffect(() => {
        loadCharacter(id);
    }, [id]);

    const loadCharacter = async (id) => {
        const item = await getCharacter(id);
        if (item.error) {
            console.log(item.error);
        } else {
            setCharacter(item);
        }
    };

    const {
        name,
        status,
        gender,
        species,
        origin,
        created,
        image,
        episode,
        location,
    } = character || {};

    const renderEpisodes = episode?.map((episode) => (
        <NavLink
            className="DetailedCharacter__link"
            exact
            to={`/episode/${id}`}
            key={episode}
        >
            <Value value={episode} />
        </NavLink>
    ));

    return character ? (
        <div className="DetailedCharacter">
            <div className="DetailedCharacter__navigationContainer">
                <NavLink exact to="/" className="DetailedCharacter__link">
                    <Label
                        className="DetailedCharacter__homeLabel"
                        label="Home"
                    />
                </NavLink>
                <Label label="|" />
                <Label label={`#${id} ${name}`} />
            </div>

            <div className="DetailedCharacter__container">
                <div className="DetailedCharacter__imageContainer">
                    <img src={image} className="DetailedCharacter__image" />
                </div>
                <div className="DetailedCharacter__descriptionContainer">
                    <h1 className="DetailedCharacter__heading">
                        #{id} {name}
                    </h1>
                    <div className="DetailedCharacter__tagsContainer">
                        <Tag children={status} />
                        <Tag children={gender} />
                    </div>
                    <div className="DetailedCharacter__infoContainer">
                        <div className="DetailedCharacter__mainInfo">
                            <LabelValueSet label="Species: " value={species} />
                            <LabelValueSet
                                label="Origin: "
                                value={origin.name}
                            />
                            <LabelValueSet label="Birthday: " value={created} />
                            <LabelValueSet
                                label="Last Known location: "
                                value={location.name}
                            />
                            <LabelValueSet
                                label="First seen in: "
                                value={origin.name}
                            />
                        </div>
                        <div className="DetailedCharacter__episodesContainer">
                            <Label label="Episodes: " />
                            {renderEpisodes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="DetailedCharacter">Error 404: Not Found</div>
    );
};

export default DetailedCharacter;
