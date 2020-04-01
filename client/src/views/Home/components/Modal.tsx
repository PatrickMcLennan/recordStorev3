import React, { FC, Dispatch } from "react";
import { ReactModal } from "react-modal";
import { IPlaylist } from "dictionary";

interface IProps {
  currentPlaylist: IPlaylist;
  homeDispatch: Dispatch<any>;
  isOpen: boolean;
}

const Modal: FC<IProps> = ({ currentPlaylist, homeDispatch, isOpen }) => (
  <ReactModal
    className="modals-create-location"
    contentLabel="Create a new Location"
    isOpen={isOpen}
    overlayClassName="modals-backdrop"
    shouldCloseOnEsc={true}
  ></ReactModal>
);

export default Modal;
