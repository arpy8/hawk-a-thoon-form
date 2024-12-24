import { CardWithForm2 } from '../card';

const data = [
    {
        title: 'Schizophrenia Detector',
        desc: 'A simple app to detect Schizophrenia',
        link: 'https://github.com/arpy8/Are_you_Schizophrenic'
    },
    {
        title: 'BSOD',
        desc: 'A python package to simulate BSOD',
        link: 'https://github.com/arpy8/bsod'
    },
    {
        title: 'Bhandaro ki Soochna',
        desc: 'Mobile app to assist users in locating the nearest bhandara.',
        link: ''
    },
]

export default function WeatherPage() {
    return (
        <>
            <div className='text-center m-10 text-4xl font-bold'>
                <h1>Example Projects</h1>
            </div>
            <div className="flex flex-wrap gap-4 m-10 justify-center">
            {
                data.map((item, index) => {
                    return (
                        <CardWithForm2 key={index} title={item.title} desc={item.desc} link={item.link} />
                    )
                })
            }
            </div>
        </>
    )
}