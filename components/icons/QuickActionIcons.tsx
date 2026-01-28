import React from "react";

type Props = { className?: string };

export function QuickIconSearch({ className = "w-10 h-10" }: Props) {
    return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="#E7F2E8" />
            <circle cx="24" cy="24" r="19" fill="white" fillOpacity="0.35" />
            <circle cx="22" cy="22" r="7" stroke="#2F6B2B" strokeWidth="2.8" />
            <path d="M27.5 27.5L32.5 32.5" stroke="#2F6B2B" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
    );
}

export function QuickIconTimer({ className = "w-10 h-10" }: Props) {
    return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="#E7F2E8" />
            <circle cx="24" cy="24" r="19" fill="white" fillOpacity="0.35" />
            {/* bouton */}
            <rect x="20" y="11" width="8" height="5" rx="2.5" fill="#2F6B2B" />
            {/* petit accent */}
            <circle cx="31.5" cy="16.5" r="2" fill="#4ADE80" />
            {/* cadran */}
            <circle cx="24" cy="26" r="10" stroke="#111827" strokeWidth="2.6" />
            {/* aiguilles */}
            <path d="M24 26V20" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M24 26L29 29" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
    );
}

export function QuickIconPhone({ className = "w-10 h-10" }: Props) {
    return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="#E7F2E8" />
            <circle cx="24" cy="24" r="19" fill="white" fillOpacity="0.35" />
            {/* Handset */}
            <path
                d="M20.2 17.2C20.2 17.2 22.6 17.5 24.8 19.7C27 21.9 27.3 24.3 27.3 24.3L30.1 23.6C31.2 23.3 32.3 23.8 32.9 24.8L34.1 27.2C34.7 28.4 34.3 29.8 33.2 30.5L30.8 32.1C30.8 32.1 29.5 35.8 22.5 28.8C15.5 21.8 19.2 20.5 19.2 20.5L20.8 18.1C21.5 17 21.1 15.6 19.9 15L17.5 13.8C16.5 13.3 15.2 13.5 14.6 14.5L13.9 15.9C13.6 16.5 13.6 17.2 13.9 17.8C14.6 19.8 16.5 24.5 21.5 29.5"
                stroke="#2F6B2B"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function QuickIconQuestion({ className = "w-10 h-10" }: Props) {
    return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" fill="#E7F2E8" />
            <circle cx="24" cy="24" r="19" fill="white" fillOpacity="0.35" />
            {/* Standard Question Mark */}
            <path
                d="M24 34V33"
                stroke="#2F6B2B"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 14C21.5 14 19.5 16 19.5 18.5"
                stroke="#2F6B2B"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 14C27 14 28.5 15.5 28.5 18C28.5 20 27.5 21.5 26 23C24.5 24.5 24 25.5 24 28"
                stroke="#2F6B2B"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
