import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    const getEpisodes = episode?.map((episode) => (
        <Value value={episode} key={episode} />
    ));

    return character ? (
        <div className="DetailedCharacter">
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
                            {getEpisodes}
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
