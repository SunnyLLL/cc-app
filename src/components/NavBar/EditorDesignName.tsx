import {
  Flex,
  IconButton,
  useEditableControls,
  Editable,
  EditablePreview,
  Input,
  EditableInput,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "@/store/hooks";
import { changeDesignName } from "@/store/reducer/courtSpecDataSlice";
import { useEffect, useState } from "react";
import checkName from "@/utils/checkName";
import NameChangeFeedback from "./NameChangeFeedback";

const DesignName = () => {
  const designName = useStoreSelector((state) => state.courtSpecData.activeCourt.designName);
  const designNames = useStoreSelector((state) => state.designName.nameList);
  const [useDesignName, setDesignName] = useState(designName);
  const [nameCheck, setNameCheck] = useState<string>("passCheck");
  const [useFeedback, setFeedback] = useState("");
  const [useFeedbackModal, setFeedbackModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDesignName(designName);
  }, [designName]);

  const handleNameChange = (editedName: string) => {
    setDesignName(editedName);
  };

  const saveNameChange = () => {
    const nameCheck = checkName(useDesignName, designNames);
    setNameCheck(nameCheck);
    if (nameCheck === "blank") {
      setFeedbackModal(true);
      setFeedback("Please have a design name.");
      return;
    }
    if (nameCheck === "existed") {
      setFeedbackModal(true);
      setFeedback(`Design name ` + useDesignName + ` is already existed.`);
      return;
    }
    if (nameCheck === "passCheck") {
      dispatch(changeDesignName(useDesignName));
      return;
    }
  };

  const EditableControls = () => {
    const { isEditing, getEditButtonProps } = useEditableControls();
    return isEditing ? null : (
      <IconButton
        aria-label="Edit"
        icon={<BiPencil />}
        variant="navbarIconBtn"
        {...getEditButtonProps()}
      />
    );
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center" fontSize="xl">
        <Editable
          color="white"
          textAlign="center"
          isPreviewFocusable={false}
          value={nameCheck === "blank" || nameCheck === "existed" ? designName : useDesignName}
          display="flex"
          alignItems="center"
          onChange={(editedName) => handleNameChange(editedName)}
          onSubmit={() => saveNameChange()}
        >
          <EditablePreview p="0px 8px" />
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>
      </Flex>
      <NameChangeFeedback
        isOpen={useFeedbackModal}
        onClose={() => setFeedbackModal(false)}
        updateFeedbackData={useFeedback}
      ></NameChangeFeedback>
    </>
  );
};

export default DesignName;
