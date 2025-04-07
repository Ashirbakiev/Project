import './statistics.css';

const Statistics = () => {
    return (
        <div className="info-strip-container">
            <div className="info-strip-header">
            IT CITY СЕГОДНЯ – ЭТО:
            </div>
            <div className="info-strip-subheader">
                (подсчёт ведется в режиме реального времени)
            </div>
            <div className="info-strip">
                <div className="info-item">
                    <img src="/img/person.png" alt="Icon 1" />
                    <h3>...</h3>
                    <p>Прошедших обучение</p>
                </div>
                <div className="info-item">
                    <img src="/img/_LightbulbIcon_.png" alt="Icon 2" />
                    <h3>...</h3>
                    <p>Аттестованных педагогов</p>
                </div>
                <div className="info-item">
                    <img src="/img/_LocationIcon_.png" alt="Icon 3" />
                    <h3>...</h3>
                    <p>Стран</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
