import React from "react";

function createStudyPage() {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default createStudyPage;
