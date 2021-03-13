const salons = [
    {
        name: 'Kensington salon',
        stars: 4.5,
        noReviews: 30,
        location: 'South West London',
        treatmentsOffered: [
            {
            name: "Ladies' hair cuts",
            prince: 20,
            duration: '30 - 35 min',        
            },
            {
                name: "Mens' haircut",
                prince: 10,
                duration: '20 - 25 min',        
                },
            {
                name: "Childrens' haircut",
                prince: 10,
                duration: '30 - 35 min',        
                },
            {
                name: "Balayage",
                prince: 50,
                duration: '30 - 35 min',        
                }
        ],
        schedule: [
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
        ],
        description: <div>
                        <p>Kensington Salon is situated in the heart of Kings Road in Chelsea.</p>
                        <p>The award-winning Beauty & MediSpa was founded in 2012 by Beauty Creative Director Ada Gartenmann, with 20 years of experience in advanced aesthetics and non-surgical treatments. The chic and exclusive salon is providing every client with the latest in Advanced Beauty Treatments over two floors.</p>
                    </div>
    },
    {
        name: 'Bayswater salon',
        stars: 3.5,
        noReviews: 20,
        location: 'South West London',
        treatmentsOffered: [
            {
            name: "Ladies' hair cuts",
            prince: 20,
            duration: '30 - 35 min',        
            },
            {
                name: "Mens' haircut",
                prince: 10,
                duration: '20 - 25 min',        
                },
            {
                name: "Childrens' haircut",
                prince: 10,
                duration: '30 - 35 min',        
                },
        ],
        schedule: [
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
            '10:00 AM - 7:00 PM',
        ],
        description: <div>
                        <p>Bayswater Salon is situated in the heart of Kings Road in Chelsea.</p>
                        <p>The award-winning Beauty & MediSpa was founded in 2012 by Beauty Creative Director Ada Gartenmann, with 20 years of experience in advanced aesthetics and non-surgical treatments. The chic and exclusive salon is providing every client with the latest in Advanced Beauty Treatments over two floors.</p>
                    </div>
    },

]

export default salons;