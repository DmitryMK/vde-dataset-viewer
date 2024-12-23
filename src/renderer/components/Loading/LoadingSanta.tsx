const LoadingSanta = () => {
    // Dreams;

    const dreams = [
        'No length limits',
        'Native UTF8',
        'API data exchange',
        'Extensibility',
        'Long names',
        'Human-readable',
        'Smaller size',
        'NDJSON',
    ];

    const getRandomDreams = (count) => {
        const shuffled = dreams.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const selectedDreams = getRandomDreams(3);

    return (
        <>
            <div className="circular-bg">
                <div className="moon" />
                <div className="dreams">
                    <div className="dream dream1">{selectedDreams[0]}</div>
                    <div className="dream dream2">{selectedDreams[1]}</div>
                    <div className="dream dream3">{selectedDreams[2]}</div>
                </div>
                <div className="santa">
                    <div className="disc" />

                    <div className="hat">
                        <div className="hat-space" />
                    </div>
                    <div className="furr" />

                    <div className="face">
                        <div className="eyebrows eyebrows--left" />
                        <div className="eyebrows eyebrows--right" />
                        <div className="nose" />
                        <div className="beard">
                            <div className="beard--left" />
                            <div className="beard--right" />
                        </div>
                        <div className="mouth"> </div>
                    </div>
                    <div className="hand--up">
                        <div className="arm--right" />

                        <div className="hand--right" />
                    </div>
                    <div className="hand--left" />
                    <div className="stomach">
                        <div className="belt-buckle" />
                    </div>
                    <div className="leg--up" />
                    <div className="leg--down" />
                </div>
                <div className="christmas-tree">
                    <div className="tree-top4" />
                    <div className="tree-top3" />
                    <div className="tree-top2" />
                    <div className="tree-top1" />
                    <div className="tree-bottom" />
                </div>
                <div className="christmas-tree-small">
                    <div className="tree-top4" />
                    <div className="tree-top3" />
                    <div className="tree-top2" />
                    <div className="tree-top1" />
                    <div className="tree-bottom" />
                </div>
                <div className="christmas-tree-white">
                    <div className="tree-top4" />
                    <div className="tree-top3" />
                    <div className="tree-top2" />
                    <div className="tree-top1" />
                    <div className="tree-bottom" />
                </div>
                <div className="gift gift--orange">
                    <div className="gift-bow--left" />
                    <div className="gift-bow--right" />
                    <div className="gift-ribbon" />
                    <div className="gift-top" />
                    <div className="gift-bottom" />
                </div>
                <div className="gift">
                    <div className="gift-bow--left" />
                    <div className="gift-bow--right" />
                    <div className="gift-ribbon" />
                    <div className="gift-top" />
                    <div className="gift-bottom" />
                </div>
            </div>
            <style>
                {`
                html, body {
                width: 100%;
                height: 100%;
                }

                * {
                box-sizing: border-box;
                }

                .dreams {
                position: absolute;
                left: 35%;
                top: 45%;
                font-family: cursive;
                }

                .dream {
                opacity: 0;
                font-size: 25px;
                color: #eeeff1;
                position: absolute;
                top: 40px;
                white-space: nowrap;
                }

                .dream1 {
                animation: dream-anim 6s linear 0s infinite;
                }

                .dream2 {
                animation: dream-anim 6s linear 2s infinite;
                }

                .dream3 {
                animation: dream-anim 6s linear 4s infinite;
                }

                @keyframes dream-anim {

                0% {
                    opacity: 0;
                    transform: translate(0,0) scale(0.5);
                }
                50% {
                    opacity: 0.7;
                    transform: translate(20px, -70px) scale(1.2);
                }

                100% {
                    opacity: 0;
                    transform: translate(50px, -140px) scale(0.5);
                }
                }

                .disc {
                background-color: #c0c4c7;
                border-radius: 50%;
                width: 285px;
                height: 45px;
                position: absolute;
                left: -55px;
                bottom: -35px;
                z-index: -2;
                }

                .circular-bg {
                background-color: #EEEEEE;
                border-radius: 50%;
                width: 500px;height: 500px;
                box-shadow: 0 550px 0 -250px #093D55 inset;
                border: 1px solid;
                position: relative;
                z-index: 5;
                margin: 20px auto;
                transform: scale(0.5);
                }

                .moon {
                width: 80px;
                height: 80px;
                box-shadow: -40px 0px 0 0 #fff inset;
                border-radius: 50%;
                background-color: #093D55;
                position: absolute;
                right: 130px;
                top: 50px;
                }

                .santa {
                position: absolute;
                left: 35%;
                bottom: 25%;
                }


                .hat-space {
                width: 75px;
                height: 100px;
                box-shadow: 30px 0 0 0 #fff inset;
                border-radius: 50%;
                background-color: transparent;
                position: absolute;
                left: 45px;
                bottom: -18px;
                transform: rotate(35deg);
                }

                .hat {
                width: 100px;
                height: 65px;
                background-color: #DA4642;
                border-radius: 100% 20% 20% 20%;
                position: absolute;
                left: -60px;
                bottom: 20px;
                transform: rotate(-15deg);
                }

                .furr {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                bottom: -10px;
                right: 40px;
                }

                .face {
                width: 60px;
                height: 90px;
                box-shadow: 30px 0px 0 0 #F5CFC1 inset;
                border-radius: 50%;
                background-color: transparent;
                position: absolute;
                left: 10px;
                bottom: 10px;
                transform: rotate(20deg);
                }

                .eyebrows {
                width: 10px;
                height: 23px;
                border-radius: 50%;
                background-color: transparent;
                position: absolute;
                transform: rotate(-15deg);
                animation: eye-scale ease-in-out 1.5s infinite;

                }

                @keyframes eye-scale {

                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(1.1);
                }
                }

                .eyebrows--left {
                left: 10px;
                bottom: 10px;
                box-shadow: 5px 0px 0 0 #fff inset, 8px 0px 0 -4px #000 ;
                }

                .eyebrows--right {
                left: 10px;
                bottom: 50px;
                box-shadow: 5px 0px 0 0 #fff inset, 8px 0px 0 -4px #000 ;
                transform: rotate(10deg);
                }

                .nose {
                width: 1px;
                height: 1px;
                border-radius: 50%;
                background-color: transparent;
                position: absolute;
                box-shadow: 5px -8px 0 2.5px #F5CFC1,10px -12px 0 12px #edb39e;
                left: 23px;
                bottom: 27px;
                z-index:1;
                }

                .beard {
                width: 65px;
                height: 65px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                top: -4px;
                left: 29px;
                transform: rotate(25deg);
                box-shadow: 15px 40px 0 -5px #fff, 35px 40px 0 -3px #fff, 20px -15px 0 0px #fff;
                }

                .beard--left {
                width: 30px;
                height: 15px;
                border-radius: 0 0 50% 50%;
                background-color: #fff;
                position: absolute;
                right: 15px;
                bottom: -52px;
                transform: rotate(-30deg);

                }

                .beard--right {
                width: 30px;
                height: 15px;
                border-radius:50% 50% 0 0;
                background-color: #fff;
                position: absolute;
                right: 55px;
                bottom: 40px;
                transform: rotate(-10deg);
                }


                .mouth {
                width: 12px;
                height: 12px;
                border-radius:50%;
                background-color: #F2ABA1;
                position: absolute;
                right: -5px;
                bottom: 30px;
                animation: mouth-scale ease-in-out 1.5s infinite;
                }

                @keyframes mouth-scale {

                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(1.4);
                }
                }

                @keyframes arm-anim {

                0% {
                    transform: rotate(-25deg);
                }

                30% {
                    width: 30px;
                    height: 65px;
                    transform: rotate(-85deg) translate(10px, 10px);
                    border-radius: 0 80% 80% 0;
                    border: none;
                    box-shadow:-2px 10px 0 -3px #fff, -20px 8px 0 0 #B03331 inset, -20px -10px 0 0 #B03331 inset, -20px 15px 0 0 #B03331 inset;
                }

                70% {
                    width: 30px;
                    height: 65px;
                    transform: rotate(-85deg) translate(10px, 10px);
                    border-radius: 0 80% 80% 0;
                    border: none;
                    box-shadow:-2px 10px 0 -3px #fff, -20px 8px 0 0 #B03331 inset, -20px -10px 0 0 #B03331 inset, -20px 15px 0 0 #B03331 inset;
                }

                100% {
                    width: 26px;
                    height: 65px;
                    border-radius: 20px 20px 0 0;
                    background-color: transparent;
                    transform: rotate(-25deg);
                    box-shadow: 0px 8px 0 0 #fff, -26px 8px 0 0 #B03331 inset;
                }
                }

                .hand--up {
                position: absolute;
                left: 95px;
                bottom: 85px;
                }

                .arm--right {
                width: 26px;
                height: 65px;
                border-radius: 20px 20px 0 0;
                background-color: transparent;
                position: absolute;
                transform: rotate(-25deg);
                box-shadow: 0px 8px 0 0 #fff, -26px 8px 0 0 #B03331 inset;
                animation: arm-anim 6s linear 20ms infinite;
                transform-origin: 0 15px;
                }


                .hand--right {
                width: 18px;
                height: 25px;
                border-radius: 0 0 50px 20px;
                background-color: #4C4C4C;
                position: absolute;
                transform: rotate(-20deg);
                transform-origin: 0 0;
                animation: hand-anim 6s linear 20ms infinite;
                }

                @keyframes hand-anim {
                0% {
                    transform:  scale(1) translate(30px,64px) rotate(-25deg);
                }
                15% {
                    transform: scale(1) translate(55px, 45px) rotate(-55deg);
                }
                30% {
                    transform: scale(1) translate(65px, 8px) rotate(-85deg);
                }
                40% {
                    transform: scaleX(0.8) translate(80px, 8px) rotate(-85deg);
                }
                50% {
                    transform: scaleX(1) translate(65px, 8px) rotate(-85deg);
                }
                60% {
                    transform: scaleX(0.8) translate(80px, 8px) rotate(-85deg);
                }
                70% {
                    transform: scale(1) translate(65px, 8px) rotate(-85deg);
                }
                85% {
                    transform: scale(1) translate(55px, 45px) rotate(-55deg);
                }
                100% {
                    transform:  scale(1) translate(30px,64px) rotate(-25deg);
                }
                }

                .hand--right:before {
                content: '';
                width: 10px;
                height: 15px;
                border-radius: 5px 0 50% 50%;
                background-color: #4C4C4C;
                position: absolute;
                left: -5px;
                bottom: 10px;
                transform: rotate(30deg);

                }

                .hand--left {
                width: 28px;
                height: 18px;
                border-radius: 25px 0 0px 70px;
                background-color: #4C4C4C;
                position: absolute;
                left: -10px;
                bottom: -5px;
                z-index: -1;
                }

                .stomach {
                width: 110px;
                height: 115px;
                border-radius: 50%;
                background-color: #DA4642;
                position: absolute;
                left: 80px;
                bottom: -25px;
                z-index: -1;
                box-shadow: -10px -4px 0 0 #DA4642 inset, -20px -4px 0 0 #000 inset, -10px -4px 0 0 #fff inset;
                }

                .belt-buckle {
                width: 10px;
                height: 15px;
                border-radius:4px;
                border: 4px solid #FD9223;
                background-color: transparent;
                position: absolute;
                left: 73px;
                bottom: 15px;
                transform: rotate(30deg);
                }

                .leg--up {
                width: 25px;
                height: 25px;
                border-radius:4px;
                background-color: #B9322E;
                position: absolute;
                left: 183px;
                bottom: 18px;
                z-index: -3;
                }

                .leg--up:after {
                content: '';
                width: 22px;
                height: 30px;
                border-radius:4px 10px 50% 50%;
                background-color: #4C4C4C;
                position: absolute;
                left: 30px;
                bottom: -3px;
                box-shadow: -10px -0px 0 0 #fff;
                }


                .leg--down {
                width: 38px;
                height: 25px;
                border-radius:4px;
                background-color: #B9322E;
                position: absolute;
                left: 170px;
                bottom: -8px;
                z-index: -2;
                }

                .leg--down:after {
                content: '';
                width: 22px;
                height: 30px;
                border-radius:4px 10px 50% 50%;
                background-color: #4C4C4C;
                position: absolute;
                left: 35px;
                bottom: -5px;
                box-shadow: -10px -0px 0 0 #fff;
                }

                .christmas-tree {
                width: 1px;
                height: 1px;
                position: absolute;
                right: 105px;
                top: 270px;
                z-index: 7;
                }

                .tree-top1 {
                width: 20px;
                height: 20px;
                border-radius:50% 0px 50% 500px;
                background-color: #B8DAD6;
                position: absolute;
                left: 35px;
                bottom: -5px;
                border: 1px solid #77858B;
                transform: rotate(-45deg);
                border-bottom-color: transparent;
                border-left-color: transparent;
                }

                .tree-top1:after {
                content: 'aaa';
                color: transparent;
                text-decoration-color: #77858B;
                text-decoration-style: wavy;
                text-decoration-line: underline;
                position: absolute;
                left: 2px;
                bottom: 2px;
                transform: rotate(45deg);
                }

                .tree-top2 {
                width: 30px;
                height: 30px;
                border-radius:50% 0px 50% 500px;
                background-color: #B8DAD6;
                position: absolute;
                left: 30px;
                bottom: -25px;
                border: 1px solid #77858B;
                transform: rotate(-45deg);
                border-bottom-color: transparent;
                border-left-color: transparent;
                }

                .tree-top2:after {
                content: 'aaaaa';
                color: transparent;
                text-decoration-color: #77858B;
                text-decoration-style: wavy;
                text-decoration-line: underline;
                border-radius:50% 0px 50% 100px;
                position: absolute;
                left: -2px;
                bottom: 9px;
                transform: rotate(45deg);
                }


                .tree-top3 {
                width: 40px;
                height: 40px;
                border-radius:50% 0px 50% 200px;
                background-color: #B8DAD6;
                position: absolute;
                left: 25px;
                bottom: -45px;
                border: 1px solid #77858B;
                transform: rotate(-45deg);
                border-bottom-color: transparent;
                border-left-color: transparent;
                }

                .tree-top3:after {
                content: 'aaaaaa';
                color: transparent;
                text-decoration-color: #77858B;
                text-decoration-style: wavy;
                text-decoration-line: underline;
                position: absolute;
                left: -4px;
                bottom: 12px;
                transform: rotate(45deg);
                }

                .tree-top4 {
                width: 50px;
                height: 50px;
                border-radius:50% 0px 50% 500px;
                background-color: #B8DAD6;
                position: absolute;
                left: 22px;
                bottom: -67px;
                border: 1px solid #77858B;
                transform: rotate(-45deg);
                box-shadow: 10px -5px 5px 0 #A0C09F inset;
                border-bottom-color: transparent;
                border-left-color: transparent;
                }

                .tree-top4:after {
                content: 'aaaaaaaa';
                color: transparent;
                text-decoration-color: #77858B;
                text-decoration-style: wavy;
                text-decoration-line: underline;
                position: absolute;
                left: -3px;
                bottom: 16px;
                transform: rotate(45deg);
                }

                .tree-bottom {
                width: 5px;
                height: 22px;
                border-radius:5px 5px 0 0;
                background-color: #744A38;
                position: absolute;
                left: 43px;
                bottom: -65px;
                }

                .christmas-tree-white {
                position: absolute;
                left: 20px;
                top: 290px;
                z-index: 7;
                transform: scale(0.8);
                }

                .christmas-tree-white .tree-top4, .christmas-tree-white .tree-top3, .christmas-tree-white .tree-top2, .christmas-tree-white .tree-top1{
                background-color: #fff;
                }

                .christmas-tree-small {
                position: absolute;
                left: 68px;
                top: 300px;
                z-index: 7;
                transform: scale(0.5);
                }

                .christmas-tree-small .tree-bottom {
                width: 5px;
                height: 15px;
                bottom: -60px;
                }

                .gift{
                position: absolute;
                right: 35px;
                top: 335px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                transform: rotate(-10deg);
                z-index: 8;
                }

                .gift-top {
                width: 25px;
                height: 5px;
                background-color: #C9EAF4;
                border: 1px solid #84c6e0;
                border-radius: 3px;
                }
                .gift-bottom {
                width: 23px;
                height: 20px;
                background-color: #C9EAF4;
                border-radius: 3px;
                }

                .gift-ribbon {
                width: 4px;
                height: 25px;
                background-color: #DF6561;
                position: absolute;
                border-radius: 2px;
                }

                .gift-bow--left {
                width: 8px;
                height: 8px;
                background-color: #DF6561;
                position: absolute;
                border-radius: 0 20px 0 20px;
                top: -7px;
                left: 9px;
                }

                .gift-bow--right {
                width: 8px;
                height: 8px;
                background-color: #DF6561;
                position: absolute;
                border-radius: 0 20px 0 20px;
                top: -7px;
                left: 13px;
                transform: scaleX(-1);
                }

                .gift--orange {
                background-color: orange;
                transform: rotate(10deg);
                right: 55px;
                }

                .gift--orange .gift-top, .gift--orange .gift-bottom {
                background-color: orange;
                }
  `}
            </style>
        </>
    );
};

export default LoadingSanta;
