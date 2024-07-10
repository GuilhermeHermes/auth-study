"use client";
import {Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../ui/card";
import { Header } from "@/components/auth/header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonlabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};


export const CardWrapper = ({
    children,
    headerLabel,
    backButtonlabel,
    backButtonHref,
    showSocial = false
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            <CardFooter className="font-normal w-full justify-center">
                <a href={backButtonHref} className=" hover:underline">{backButtonlabel}</a>
            </CardFooter>
        </Card>
    )
}