import './DetailedCharacter.scss';
import Tags from '../../components/Tags';
import CardLogo from '../../assets/icons/CardLogo.svg';
import { useParams } from 'react-router-dom';

const DetailedCharacter = ({ selectCharacter }) => {
    const { id } = useParams();
    const character = selectCharacter(Number(id));
    console.log('character', character);
    const { name, status, species } = character || {};

    return character ? (
        <div className="DetailedCharacter">
            <div className="DetailedCharacter__imageContainer">
                <img src={CardLogo} className="DetailedCharacter__image" />
            </div>
            <div className="DetailedCharacter__description">
                <h1>
                    #{id} {name}
                </h1>
                <div className="DetailedCharacter__tag">
                    <Tags />
                    <Tags />
                </div>
                <div className="DetailedCharacter__mainInfo">
                    <p className="DetailedCharacter__infoLabel"> Species: </p>
                    <p className="DetailedCharacter__infoValue"> Human </p>
                    <p className="DetailedCharacter__infoLabel"> Origin: </p>
                    <p className="DetailedCharacter__infoValue"> Earth </p>
                    <p className="DetailedCharacter__infoLabel"> Birthday: </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        10 Jun 2020{' '}
                    </p>
                    <p className="DetailedCharacter__infoLabel">
                        {' '}
                        Last Known location:{' '}
                    </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        Earth (Replacement Dimension){' '}
                    </p>
                    <p className="DetailedCharacter__infoLabel">
                        {' '}
                        First seen in:{' '}
                    </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        Edge of Tomorty: Rick, Die, Rickpeat{' '}
                    </p>
                </div>
                <div className="DetailedCharacter__episods">
                    <p className="DetailedCharacter__infoLabel"> Episodes: </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        S03E07: The Ricklantis Mixup{' '}
                    </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        S01E10: Close Rick-counters of the Rick Kind{' '}
                    </p>
                    <p className="DetailedCharacter__infoValue">
                        {' '}
                        S01E10: Close Rick-counters of the Rick Kind{' '}
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div className="DetailedCharacter">Error 404: Not Found</div>
    );
};

export default DetailedCharacter;
