import { useStoreSelector } from "@/store/hooks";
import DimensionText from "./DimensionText";
import { ICourtStartPoint } from "../../interfaces/courtStartPoint";
import { MIN_DIMENSION_BOX } from "../../constants/courtSize";

interface BorderDimensionProps {
  startPoint: ICourtStartPoint;
}
const BorderDimension: React.FC<BorderDimensionProps> = ({ startPoint }) => {
  const { courtAreaXLength, courtAreaYLength, borderLength } = useStoreSelector(
    (state) => state.courtSize
  );
  const startPointX = startPoint.X - borderLength;
  const startPointY = startPoint.Y - borderLength;

  const textStartX =
    borderLength <= MIN_DIMENSION_BOX ? startPoint.X - MIN_DIMENSION_BOX : startPointX;
  const textStartY =
    borderLength <= MIN_DIMENSION_BOX ? startPoint.Y - MIN_DIMENSION_BOX : startPointY;

  const borderDimensionPosition = [
    {
      id: 1,
      startPoint: {
        X: textStartX,
        Y: textStartY,
      },
    },
    {
      id: 2,
      startPoint: {
        X: textStartX,
        Y: startPoint.Y + courtAreaYLength,
      },
    },
    {
      id: 3,
      startPoint: {
        X: startPoint.X + courtAreaXLength,
        Y: textStartY,
      },
    },
    {
      id: 4,
      startPoint: {
        X: startPoint.X + courtAreaXLength,
        Y: startPoint.Y + courtAreaYLength,
      },
    },
  ];

  return (
    <>
      {borderDimensionPosition.map((item: { startPoint: ICourtStartPoint; id: number }) => (
        <div key={item.id}>
          <DimensionText startPoint={item.startPoint} text={borderLength} />
        </div>
      ))}
    </>
  );
};

export default BorderDimension;