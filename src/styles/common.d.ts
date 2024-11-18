export interface ScrollYProps {
  scrollY: number;
}

export interface WorkModalProps {
  onClose: () => void;
  projectId: number;
  projectData: {
    link: {
      deploy: string;
      github: string;
    };
  };
}
export interface Props {
  id: number;
  title: string;
  img: {
    infoImg: string;
    mainImg: string;
  };
  stack: string;
  projectDetails: {
    teamOrIndividual: string;
    responsive: string;
    projectType: string;
  };
  desc: string;
}
