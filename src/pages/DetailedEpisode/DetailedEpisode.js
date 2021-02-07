import { useParams, NavLink } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { useEffect, useState } from 'react';

import { getEpisode } from '../../api';
import LabelValueSet from '../../components/LabelValueSet';
import Label from '../../components/Label';
import Value from '../../components/Value';

import './DetailedEpisode.scss';

const DetailedEpisode = () => {
    const renderCharacters = (characterReference) => {
        const id = characterReference.split('/').slice(-1)[0];
        return (
            <NavLink
                className="DetailedEpisode__link"
                key={id}
                exact
                to={`/character/${id}`}
            >
                <Value value={characterReference} />
            </NavLink>
        );
    };
    const formattedDate = () => {
        return format(
            parse(airDate?.toString(), 'MMMM d, yyyy', new Date()),
            'dd MMM yyyy'
        );
    };

    const { id } = useParams();

    const [episode, setEpisode] = useState('');
    const [airDate, setAirDate] = useState(format(new Date(), 'MMMM d, yyyy'));

    const loadEpisode = async (id) => {
        const item = await getEpisode(id);
        if (item.error) {
            console.log(item.error);
        } else {
            setEpisode(item);
            setAirDate(item.air_date);
        }
    };

    useEffect(() => {
        loadEpisode(id);
    }, [id]);

    return (
        <div className="DetailedEpisode">
            <div className="DetailedEpisode__navigationContainer">
                <NavLink exact to="/" className="DetailedEpisode__link">
                    <Label
                        className="DetailedEpisode__homeLabel"
                        label="Home"
                    />
                </NavLink>
                <Label label="|" />
                <Label label={`Episode: #${episode.episode}`} />
            </div>

            <div className="DetailedEpisode__container">
                <div className="DetailedEpisode__episodeLogoContainer">
                    <p className="DetailedEpisode__episodeLogoName">
                        {episode.episode}
                    </p>
                </div>
                <div className="DetailedEpisode__descriptionContainer">
                    <h1 className="DetailedEpisode__heading">{episode.name}</h1>
                    <div className="DetailedEpisode__mainInfo">
                        <LabelValueSet
                            label="Air date: "
                            value={formattedDate()}
                        />
                        <div className="DetailedEpisode__charactersContainer">
                            <Label label="Characters: " />
                            {episode.characters?.map(renderCharacters)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedEpisode;
