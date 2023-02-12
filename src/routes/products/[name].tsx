import { useParams } from 'solid-start';
import Nav from '~/components/Nav';
import styles from '../../styles/components/ProductPage.module.scss';

export default function ProductPage() {
  const params = useParams();
  return (
    <>
      <Nav />
      <section class={styles.section}>
        <div class={styles.imgSection}>
          <img
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
            alt="happy dog"
            height="200"
            width="200"
          />
        </div>
        <div class={styles.textSection}>
          <div>Product {params.name}</div>
          <p>Product description</p>
          <p>£18</p>

          <fieldset>
            <legend>Product options:</legend>

            <div>
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label for="huey">Huey</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">Dewey</label>
            </div>

            <div>
              <input type="radio" id="louie" name="drone" value="louie" />
              <label for="louie">Louie</label>
            </div>
          </fieldset>

          <input type="button" value="Add to basket" />

          <div>
            Reviews:
            <ul>
              <li>
                <h4>Review title</h4>
                <div class={styles.ratingAndReviewerName}>
                  <p>Star rating: 4/5</p>
                  <p>Reviewer's Name: Zomato</p>
                </div>
                <p>Body of the review</p>
              </li>
              <li>
                <h4>Review title</h4>
                <div class={styles.ratingAndReviewerName}>
                  <p>Star rating: 3/5</p>
                  <p>Reviewer's name: Pelican</p>
                </div>
                <p>Body of the review</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
