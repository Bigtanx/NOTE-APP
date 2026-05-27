import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const NoteNotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      {/* Card */}
      <div className="text-center max-w-md p-8 rounded-2xl bg-base-100 shadow-md border border-base-250">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-primary/10">
            <BookOpen className="size-10 text-primary" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-2 text-base-content">
          No notes found
        </h2>

        <p className="mb-6 text-base-content/70">
          Start organizing your thoughts by creating your first note.
        </p>

        {/* Button */}
        <Link to="/create" className="btn btn-primary w-full">
          Create a Note
        </Link>
      </div>
    </div>
  );
};

export default NoteNotFound;
