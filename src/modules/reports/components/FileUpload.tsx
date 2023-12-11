import React, { useState} from "react";
import { DropboxIcon, GoogleDriveIcon } from "@/components/icons";
import { useTitle } from "@/hooks/useTitle";

const FileUpload = () => {
  useTitle("Subir archivos");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      handleShowFile(file);
    }
  };

  const handleShowFile = (file: File) => {
    console.log("Mostrar información del archivo:", file);
    alert(`Nombre del archivo: ${file.name}`);
  };

  const handleGoogleDriveClick = async () => {
    console.log(selectedFile)
  };

  return (
    <div className="flex justify-center items-center pt-16">
      <div className="bg-background p-8 rounded-lg mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-semibold mb-4 ">Subir tus archivos</h2>
        <p className="text-base mb-8">
          Sube tus reportes con la tecnología de{" "}
          <span className="font-bold">SolidDocuments</span>
        </p>
        <div className="flex w-full justify-center items-center mb-4">
          <div className="bg-primary p-5 rounded-xl w-[400px] items-center">
            <label
              htmlFor="fileInput"
              className="text-black font-medium text-2xl block mb-2 cursor-pointer text-center"
            >
              Seleccionar documento
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              accept=".xls, .xlsx, .doc, .docx, .pdf"
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              className="bg-primary rounded-full ml-5 h-8 w-8 flex items-center justify-center"
              onClick={handleGoogleDriveClick}
            >
              <GoogleDriveIcon />
            </button>
            <button className="bg-primary rounded-full ml-5 h-8 w-8 mt-1 flex items-center justify-center">
              <DropboxIcon />
            </button>
          </div>

        </div>
        <p className="text-gray-600 text-base mb-4">
          Se admite todo tipo de documento: Excel, Word, PDF, etc.
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
