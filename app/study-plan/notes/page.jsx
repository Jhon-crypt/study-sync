import Header from "@/app/components/header/header";
import NotesSection from "@/app/components/section/notesSection";

export default function Notes() {

    return (

        <>

            <Header title="Modules" icon="bi-chevron-left" route="/dashboard" />

            <NotesSection />
        </>

    )

}