"use client";
import React, { useEffect, useState } from "react";
import './menu.css';
import { filters } from "@/app/data/data";
import SectionTitle from "@/app/components/sectTitle/sectionTitle";
import MenuItem from "@/app/components/menuItem/menuItem";
import Preloader from "@/app/components/preload/preloader";
import { fetchMenuData } from "@/app/api/menu/fetchMenu";
import { MenuItemType } from "@/app/types/menuItem";// Import MenuItemType

export default function Menu() {
    const [data, setData] = useState<MenuItemType[]>([]);  // Updated to use MenuItemType
    const [items, setItems] = useState<MenuItemType[]>([]);  // Updated to use MenuItemType

    // Fetch menu data using the fetchMenuData function
    const getMenuData = async () => {
        try {
            const menuData = await fetchMenuData();  // Use the fetch function
            setData(menuData);  // Set the fetched data to state
        } catch (e) {
            console.log("Error fetching menu data:", (e as Error).message);  // Error handling
        }
    };

    useEffect(() => {
        getMenuData();  // Call getMenuData on component mount
    }, []);  // Empty dependency array to run once on mount

    useEffect(() => {
        setItems(data);  // Set items whenever data changes
    }, [data]);

    const handleFilterActive = (id: number) => {
        filters.map(filter => {
            filter.active = false;
            if (filter.id === id) filter.active = true;
        });
    };

    const handleFilterChange = (id: number, category: string) => {
        handleFilterActive(id);
        if (category === 'all') {
            setItems(data);  // Show all items if 'all' is selected
        } else {
            setItems(
                data.filter((item: MenuItemType) => item.category === category)  // Filter by category
            );
        }
    };

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Menu" subtitle="Check Our Tasty Menu" />
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-filt">
                            {filters.map(filter => (
                                <li
                                    key={filter.id}
                                    className={`${filter.active ? 'filter-active' : undefined}`}
                                    onClick={() => handleFilterChange(filter.id, filter.category)}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className="row menu-container"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {items.length === 0 ? (
                        <Preloader />  // Show Preloader when items are loading
                    ) : (
                        items.map((item: MenuItemType) => (
                            <MenuItem key={item.id} item={item} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
