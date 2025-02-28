import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { idRequest } from "../../store/thunks/TVShowsThunks.ts";
import {
  selectLoading,
  selectTVShow,
} from "../../store/slices/TVShowsSlice.ts";
import { Container, Card, Table } from "react-bootstrap";
import Loader from "../../components/UI/Loader/Loader.tsx";

const ShowDetails = () => {
  const dispatch = useAppDispatch();
  const showDetails = useAppSelector(selectTVShow);
  const loading = useAppSelector(selectLoading);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
    dispatch(idRequest(Number(id)));
  }, [dispatch, id, navigate]);

  let content: React.ReactNode | null = null;

  if (!showDetails) content = <h1></h1>;
  if (loading) content = <Loader />;

  console.log(loading);

  if (showDetails && !loading)
    content = (
      <Container fluid className="mt-4">
        <div className="d-flex gap-4">
          <div style={{ flex: "0 0 300px" }}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src={
                  showDetails.image
                    ? showDetails.image.medium
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/624px-No-Image-Placeholder.svg.png"
                }
                alt={showDetails.name}
              />
            </Card>
          </div>

          <div className="flex-grow-1">
            <h1 className="mb-3">{showDetails.name}</h1>
            <Table className="w-50">
              <tbody>
                <tr>
                  <td>
                    <strong>Status:</strong>
                  </td>
                  <td>{showDetails.status}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Language:</strong>
                  </td>
                  <td>{showDetails.language}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Genres:</strong>
                  </td>
                  <td>{showDetails.genres.join(", ") || "N/A"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Premiered:</strong>
                  </td>
                  <td>{showDetails.premiered || "Unknown"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ended:</strong>
                  </td>
                  <td>{showDetails.ended || "Still in production"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Official Site:</strong>
                  </td>
                  <td>
                    {showDetails.officialSite ? (
                      <a href={showDetails.officialSite}>
                        {showDetails.officialSite}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="mt-4">
              <h3>Summary</h3>
              {showDetails.summary ? (
                <div
                  dangerouslySetInnerHTML={{ __html: showDetails.summary }}
                />
              ) : (
                <p>no summary</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    );

  return <div>{content}</div>;
};

export default ShowDetails;
