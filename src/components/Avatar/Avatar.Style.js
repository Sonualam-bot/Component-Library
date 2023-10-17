import styled from "styled-components";

export const AvatarSmall = styled.img`
  border-radius: 50%;
  background-image: ${(props) => (props.src ? props.src : "")};
  height: ${(props) => (props.height ? props.height : "60px")};
  width: ${(props) => (props.width ? props.width : "60px")};
  object-fit: cover;
  border: 1px solid grey;
`;

export const AvatarMedium = styled(AvatarSmall)`
  height: ${(props) => (props.height ? props.height : "80px")};
  width: ${(props) => (props.width ? props.width : "80px")};
`;
export const AvatarLarge = styled(AvatarSmall)`
  height: ${(props) => (props.height ? props.height : "100px")};
  width: ${(props) => (props.width ? props.width : "100px")};
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

export const LetterSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 50%;
  background-image: ${(props) => (props.src ? props.src : "")};
  height: ${(props) => (props.height ? props.height : "60px")};
  width: ${(props) => (props.width ? props.width : "60px")};
  object-fit: cover;
  border: 1px solid grey;
  background-color: ${(props) => (props.bg ? props.bg : "#475569")};
`;

export const LetterMedium = styled(LetterSmall)`
  font-size: 2rem;
  height: ${(props) => (props.height ? props.height : "90px")};
  width: ${(props) => (props.width ? props.width : "90px")};
`;

export const LetterLarge = styled(LetterSmall)`
  font-size: 2.5rem;
  height: ${(props) => (props.height ? props.height : "120px")};
  width: ${(props) => (props.width ? props.width : "120px")};
`;

export const UserStatus = styled.div`
  background-color: ${(props) => {
    if (props.activity === "online") {
      return "#16a34a";
    }
    if (props.activity === "do not disturb") {
      return "#dc2626";
    }
    if (props.activity === "offline") {
      return "#a8a29e";
    }
  }};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  right: 35px;
  bottom: 0px;
  border: 1px solid #fff;
`;

export const DoNotDisturb = styled(UserStatus)`
  bottom: 2px;
  right: 8px;
  height: 23px;
  width: 23px;
`;
export const UserOffline = styled(UserStatus)`
  bottom: 2px;
  right: 8px;
  height: 25px;
  width: 25px;
`;

export const AvatarIndiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  gap: 0.6rem;
  margin-bottom: 1rem;
  position: relative; /* Add relative positioning to the container */
`;
