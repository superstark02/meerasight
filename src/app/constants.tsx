import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { vaibhavi, rajkumar, rajkumarsharma, sunil, pradeep2, trinabh, nirmal, jitendra, vanshika } from "../../assets/exports"

const welcomeSection = {
    title: "Welcome to MEERASIGHT",
    subtitle: "Expert Eye Care Solutions",
    images: [] // ask dipit
};

const services = {
    title: "Services",
    images: [], // ask dipit
    visits: {
        title: "Opening Hours",
        subtitle: "Come Visit",
        time: [
            {
                day: "Weekdays",
                slots: ["9:00am - 1:30pm", "6:00pm - 8:00pm"]
            },
            {
                day: "Sunday",
                slots: ["9:00am - 12:00noon"]
            },
            {
                day: "Thursday",
                slots: ["CLOSED"]
            }
        ]

    }
}

const testimonials = {
    title: "Testimonials",
    data: [
        {
            name: "Ms. Vanshika Yadav",
            description: "I was facing problems in vision in Classroom. Dr. Sonia Sharma treated me successfully. She is very soft spoken and treated me politely.",
            image: vanshika

        },
        {
            name: "Ms. Vaibhavi Sathi",
            description: "I got my treatment of Accute dryness & itching in my eyes by Dr Sonia Sharma. I found her to be extremely patient & humble which helped me massively in the treatment process. Would highly recommend her for any eye treatment.",
            image: vaibhavi
        },
        {
            name: "Mr. Jitendra Malik",
            description: "I  had a commendable experience. It was nice meeting Dr Sonia Sharma. I am highly satisfied with treatment offered.",
            image: jitendra
        },
        {
            name: "Mr. Sunil Bhalla",
            description: "I got my both eyes operated for Cataract and my daughter's cosmetic surgery from Dr. Sonia Sharma. She answered all my queries and eased my anxiety during surgery and made me comfortable. I am very satisfied the way she does her job and would recommend to others as well.",
            image: sunil

        },
        {
            name: "Mr. Raj Kumar",
            description: "I got my treatment done by Dr Sonia Sharma. She gave me proper treatment & guidance to resolve my problems. She is highly softspoken & gives very good guidance.",
            image: rajkumar
        },
        {
            name: "Mr. Raj Kumar Sharma",
            description: "I got my Eye treatment & operation done by Dr Sonia Sharma. She performed my surgery successfully & also gave me proper treatment. I would highly recommend her for any Eye treatment.",
            image: rajkumarsharma

        },
        {
            name: "Mrs. Nirmal",
            description: "I got my Glucoma treatment done by Dr Sonia Sharma and am highly satisfied from her treatment methodologies.",
            image: nirmal
        },
        {
            name: "Mr. Pradeep Mathur",
            description: "I got my Eye-Irritation treatment done by Dr Sonia Sharma. The diagnosis done was perfect & treatment has worked wonders. I would like to recommend my friends and relatives to refer her for any eye treatment.",
            image: pradeep2
        },
        {
            name: "Mr. Trinabh Singh",
            description: "Underwent treatment of Ocular hypertension. Dr Sonia Sharma's clinic is very well equipped, very clean and she cleared all my queries.",
            image: trinabh
        }
    ]
}

const footer = {
    links: [
        {
            icon: <WhatsAppIcon className='icon' />,
            link: 'https://api.whatsapp.com/send/?phone=917428728458&text&type=phone_number&app_absent=0' // whatsapp
        },
        {
            icon: <FacebookIcon className='icon' />,
            link: 'https://www.facebook.com/MeeraSighteyeclinic/' //fb
        },
        {
            icon: <InstagramIcon className='icon' />,
            link: 'https://www.instagram.com/meera_sight/' // insta
        },
        {
            icon: <XIcon className='icon' />,
            link: 'https://twitter.com/MeeraSight' // twitter
        },
        {
            icon: <LinkedInIcon className='icon' />,
            link: 'https://www.linkedin.com/in/meerasight/' // linkedin
        },
        {
            icon: <YouTubeIcon className='icon' />,
            link: 'https://www.youtube.com/channel/UCoEM8sMaNUdwedYXpOQDY_A' // youtube
        },
    ],
    text: "©2020 by MeeraSight. All Right Reserved."
}

export { welcomeSection, services, testimonials, footer }