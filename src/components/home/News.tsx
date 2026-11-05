'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title = 'News' }: NewsProps) {
    return (
        <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-xs text-neutral-500 mt-1 w-16 flex-shrink-0">{item.date}</span>
                        <div className="text-sm text-neutral-700">
                            <ReactMarkdown components={{
                                a: ({ ...props }) => (
                                    <a {...props} target="_blank" rel="noopener noreferrer"
                                        className="text-accent font-medium hover:underline" />
                                ),
                            }}>
                                {item.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
