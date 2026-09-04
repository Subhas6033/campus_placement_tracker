import React from "react";
import { Button, Modal } from "../../../../Components/index";

const StoryModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="The idea behind the tracker"
      description="A simpler way to navigate campus placements."
      size="lg"
      footer={
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      }
    >
      <div className="space-y-5">
        <p className="text-sm leading-7 text-ink-mute">
          Campus placements are exciting, but they can quickly become difficult
          to manage. Students often have dozens of companies to research,
          applications to submit, deadlines to remember, and interviews to
          prepare for.
        </p>

        <p className="text-sm leading-7 text-ink-mute">
          Campus Placement Tracker was designed around one simple idea:
          everything related to your placement journey should be easy to find,
          easy to update, and easy to understand.
        </p>

        <div className="rounded-lg border border-ink-line bg-white p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-500">
            The goal
          </p>

          <p className="mt-2 font-display text-xl leading-7 text-ink">
            Spend less time figuring out what to do next, and more time actually
            doing it.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
