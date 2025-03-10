"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FloatingElements from '@/components/floating-elements';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import FeaturedProjectsSection from '@/components/featured-projects-section';
import TechnicalSkillsSection from '@/components/technical-skills-section';
import ContactSection from '@/components/contact-section';
import ResumeSection from '@/components/resume-section';

const MaintenancePage = () => {
    const [showNavigation, setShowNavigation] = useState(false);
    const [isResumeVisible, setIsResumeVisible] = useState(false); // Define the state variable

    const handleClose = () => {
        setIsResumeVisible(false); // Define the close handler
    };

    if (showNavigation) {
        return (
            <div>
                <Navigation toggleResume={false} />
                <div>
                    {/* Render the main content here */}
                    <HeroSection />
                    <ResumeSection onClose={handleClose} />
                    <FeaturedProjectsSection />
                    <TechnicalSkillsSection />
                    <ContactSection isResumeVisible={isResumeVisible} />
                    {/* Include other components as needed */}
                </div>
            </div>
        );
    }

    return (
        <section id='maintainance' className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <FloatingElements section="hero" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container relative z-10 px-4 md:px-6"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-primary">Under Maintainance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Hi, I'm Taksh Patel. I'm currently rewriting my website but can still be view by clicking the button below.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button size="lg" className="rounded-full" onClick={() => setShowNavigation(true)}>
                            View Portfolio
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default MaintenancePage;
