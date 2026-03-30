import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '../assets/products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const hits = PRODUCTS.slice(0, 6);

    return (
        <>
            <div className="start">
                <div className="start_text">
                    <p className="uni-t">Добро пожаловать в уютный мир природы!</p>
                    <div>
                        <p className="t">
                            Каждый цветок и растение бережно выращены нашими специалистами,
                            готовые стать частью вашего дома или офиса, наполнив пространство
                            свежестью и теплом.
                        </p>
                        <p>
                            Мы предлагаем широкий ассортимент декоративных цветов, комнатных
                            растений и экзотики, которая придаст вашему интерьеру
                            индивидуальность и стиль.
                        </p>
                    </div>
                    <Link to="/catalog" className="start-b">
                        Посмотреть весь ассортимент
                    </Link>
                </div>
            </div>

            <div className="content">
                {/* Категории */}
                <div className="to_find">
                    <p className="cont_t">У нас вы найдёте:</p>
                    <div className="grid_cont">
                        <Link to="/catalog?category=succulents" className="ph_t">
    <img src="/images/categories/succulents.png" alt="Суккуленты" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🌵 Суккуленты</p>
</Link>

<Link to="/catalog?category=foliage" className="ph_t">
    <img src="/images/categories/foliage.png" alt="Декоративно-лиственные" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🌿 Декоративно-лиственные</p>
</Link>

<Link to="/catalog?category=flowering" className="ph_t">
    <img src="/images/categories/flowering.png" alt="Цветущие" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🌸 Цветущие</p>
</Link>

<Link to="/catalog?category=palms" className="ph_t">
    <img src="/images/categories/palms.png" alt="Пальмы" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🌴 Пальмы</p>
</Link>

<Link to="/catalog?category=orchids" className="ph_t">
    <img src="/images/categories/orchids.png" alt="Орхидеи" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🦋 Орхидеи</p>
</Link>

<Link to="/catalog?category=ficus" className="ph_t">
    <img src="/images/categories/ficus.png" alt="Фикусы" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    <p>🌳 Фикусы</p>
</Link>
                    </div>
                </div>

                {/* Хиты продаж */}
                <div className="hits">
                    <p className="cont_t">Хиты продаж</p>
                    <Slider {...sliderSettings}>
                        {hits.map(product => (
                            <div key={product.id} style={{ padding: '10px' }}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default HomePage;