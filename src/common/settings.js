export const settings = {
        slidesToShow: 8,
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
            },          
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            }
            },
            {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }]
}